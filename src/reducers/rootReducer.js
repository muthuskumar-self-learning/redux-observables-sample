import { FETCH_WHISKIES, FETCH_WHISKIES_SUCCESS, FETCH_WHISKIES_FAILURE } from "../actions";

const initialState = {
    whiskies: [],
    isLoading: false,
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WHISKIES:
            return {
                whiskies: [],
                isLoading: true,
                error: false
            }
        case FETCH_WHISKIES_SUCCESS:
            return {
                whiskies: action.payload,
                isLoading: false,
                error: false
            }
        case FETCH_WHISKIES_FAILURE:
            return {
                whiskies: [],
                isLoading: false,
                error: action.payload
            }
        default: return state;
    }
}