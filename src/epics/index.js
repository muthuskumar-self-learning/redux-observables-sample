import { combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { FETCH_WHISKIES, fetchWhiskiesSuccess, fetchWhiskiesFailure } from '../actions';

const url = 'https://evening-citadel-85778.herokuapp.com/whiskey/';

const fetchWhiskeyEpic = (action$) => {
    return action$
        .pipe(
            ofType(FETCH_WHISKIES),
            switchMap(() => {
                return ajax
                    .getJSON(url)
                    .pipe(
                        map(data => data.results),
                        map(whiskies => whiskies.map(whiskey => ({
                            id: whiskey.id,
                            name: whiskey.title,
                            imageUrl: whiskey.img_url
                        }))),
                        map(whiskies => whiskies.filter(whiskey => !!whiskey.imageUrl))
                    )
            }),
            map(whiskies => fetchWhiskiesSuccess(whiskies)),
            catchError(error => of(fetchWhiskiesFailure(error.message)))
        )
}

export const rootEpic = combineEpics(fetchWhiskeyEpic);