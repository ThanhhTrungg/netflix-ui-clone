import {combineReducers} from "redux"
import reducerMovies from "./reducerMovies"
import reducerUser from "./reducerUserInfo"

const rootReducer = combineReducers({
    infoMovies: reducerMovies,
    user: reducerUser,
})

export default rootReducer