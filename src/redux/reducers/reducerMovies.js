import * as Types from "../actions/types";

const reducerMoviesInitialState = {
    originals: [],
    trending: [],
    toprated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
    movieDetail: null,
    moviesSearch: [],
};

// (state, action) => newState
function reducerMovies(state = reducerMoviesInitialState, action) {
    const { type, payload } = action;

    switch (type) {
        case Types.GET_ORIGINALS:
            return {
                ...state,
                originals: payload,
            };
        case Types.GET_TRENDING:
            return {
                ...state,
                trending: payload,
            };
        case Types.GET_TOPRATED:
            return {
                ...state,
                toprated: payload,
            };
        case Types.GET_ACTION:
            return {
                ...state,
                action: payload,
            };
        case Types.GET_COMEDY:
            return {
                ...state,
                comedy: payload,
            };
        case Types.GET_HORROR:
            return {
                ...state,
                horror: payload,
            };
        case Types.GET_ROMANCE:
            return {
                ...state,
                romance: payload,
            };
        case Types.GET_DOCUMENTARIES:
            return {
                ...state,
                documentaries: payload,
            };
        case Types.SET_MOVIEDETAIL:
            return {
                ...state,
                movieDetail: payload,
            };
        case Types.SEARCH_MOVIE:
            return {
                ...state,
                moviesSearch: payload,
            };
        default:
            return state;
    }
}

export default reducerMovies;
