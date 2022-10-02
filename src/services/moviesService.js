import * as httpRequest from "~/utils/httpRequest"
import * as actions from "~/redux/actions/getMoviesAction"

const API_KEY = "1d1ad12e8f3049c44965574396bfe9e2"

export const requests = {
    originals: `discover/movie?api_key=${API_KEY}&with_networks=213`,
    trending: `trending/all/week?api_key=${API_KEY}&language=en-us`,
    toprated: `movie/top_rated?api_key=${API_KEY}&language=en-us`,
    action: `discover/movie?api_key=${API_KEY}&with_genres=28&language=vi`,
    comedy: `discover/movie?api_key=${API_KEY}&with_genres=35&language=vi`,
    horror: `discover/movie?api_key=${API_KEY}&with_genres=27&language=vi`,
    romance: `discover/movie?api_key=${API_KEY}&with_genres=10749&language=vi`,
    documentaries: `discover/movie?api_key=${API_KEY}&with_genres=99&language=vi`,
}

// thunk function
export const getOriginals = () => async (dispatch) => {
    try {
        const response = await httpRequest.getAPI(requests.originals)
        dispatch(actions.getOriginalsAct(response.results))
    } catch (error) {
        console.log("Get Originals API is error: ", error)
    }
}

export const getTrending = () => async (dispatch) => {
    try {
        const response = await httpRequest.getAPI(requests.trending)
        dispatch(actions.getTrendingAct(response.results))
    } catch (error) {
        console.log("Get Trending API is error: ", error)
    }
}

export const getTopRated = () => async (dispatch) => {
    try {
        const response = await httpRequest.getAPI(requests.toprated)
        dispatch(actions.getTopRatedAct(response.results))
    } catch (error) {
        console.log("Get TopRated API is error: ", error)
    }
}

export const getAction = () => async (dispatch) => {
    try {
        const response = await httpRequest.getAPI(requests.action)
        dispatch(actions.getActionAct(response.results))
    } catch (error) {
        console.log("Get Action API is error: ", error)
    }
}

export const getComedy = () => async (dispatch) => {
    try {
        const response = await httpRequest.getAPI(requests.comedy)
        dispatch(actions.getComedyAct(response.results))
    } catch (error) {
        console.log("Get Comedy API is error: ", error)
    }
}

export const getHorror = () => async (dispatch) => {
    try {
        const response = await httpRequest.getAPI(requests.horror)
        dispatch(actions.getHorrorAct(response.results))
    } catch (error) {
        console.log("Get Horror API is error: ", error)
    }
}

export const getRomance = () => async (dispatch) => {
    try {
        const response = await httpRequest.getAPI(requests.romance)
        dispatch(actions.getRomanceAct(response.results))
    } catch (error) {
        console.log("Get Romance API is error: ", error)
    }
}

export const getDocumentaries = () => async (dispatch) => {
    try {
        const response = await httpRequest.getAPI(requests.documentaries)
        dispatch(actions.getDocumentariesAct(response.results))
    } catch (error) {
        console.log("Get Documentaries API is error: ", error)
    }
}

export const getSearchMovies = (keywords, debounce) => async (dispatch) => {
    try {
        if (!keywords) {
            return
        } else {
            const response = await httpRequest.getAPI(
                `search/multi?api_key=${API_KEY}&language=en-us&include_adult=false&query=${keywords}`,
                {
                    params: {
                        debounce,
                    },
                }
            )
            dispatch(actions.searchMoviesAct(response.results))
        }
    } catch (error) {
        console.log("Search movies API is error: ", error)
    }
}
