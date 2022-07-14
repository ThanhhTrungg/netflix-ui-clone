import {
    GET_ORIGINALS,
    GET_TRENDING,
    GET_TOPRATED,
    GET_ACTION,
    GET_COMEDY,
    GET_HORROR,
    GET_ROMANCE,
    GET_DOCUMENTARIES,
    SET_MOVIEDETAIL,
    SEARCH_MOVIE,
} from "./types";

export const getOriginalsAct = (payload) => {
    return {
        type: GET_ORIGINALS,
        payload,
    };
};

export const getTrendingAct = (payload) => {
    return {
        type: GET_TRENDING,
        payload,
    };
};

export const getTopRatedAct = (payload) => {
    return {
        type: GET_TOPRATED,
        payload,
    };
};
export const getActionAct = (payload) => {
    return {
        type: GET_ACTION,
        payload,
    };
};
export const getComedyAct = (payload) => {
    return {
        type: GET_COMEDY,
        payload,
    };
};
export const getHorrorAct = (payload) => {
    return {
        type: GET_HORROR,
        payload,
    };
};
export const getRomanceAct = (payload) => {
    return {
        type: GET_ROMANCE,
        payload,
    };
};
export const getDocumentariesAct = (payload) => {
    return {
        type: GET_DOCUMENTARIES,
        payload,
    };
};
export const setMovieDetailAct = (payload) => {
    return {
        type: SET_MOVIEDETAIL,
        payload,
    };
};
export const searchMoviesAct = (payload) => {
    return {
        type: SEARCH_MOVIE,
        payload,
    };
};
