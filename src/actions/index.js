export const FETCH_WHISKIES = 'FETCH_WHISKIES';
export const FETCH_WHISKIES_SUCCESS = 'FETCH_WHISKIES_SUCCESS';
export const FETCH_WHISKIES_FAILURE = 'FETCH_WHISKIES_FAILURE';

export const fetchWhiskies = () => ({
    type: FETCH_WHISKIES
});

export const fetchWhiskiesSuccess = (whiskies) => ({
    type: FETCH_WHISKIES_SUCCESS,
    payload: whiskies
});

export const fetchWhiskiesFailure = (errorMessage) => ({
    type: FETCH_WHISKIES_FAILURE,
    payload: errorMessage
});