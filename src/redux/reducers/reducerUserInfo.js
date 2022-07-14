import * as Types from "../actions/types";

const reducerUserInitialState = {
    user: null,
};

// (state, action) => newState
function reducerUser(state = reducerUserInitialState, action) {
    const { type, payload } = action;

    switch (type) {
        case Types.LOGIN_USER:
            return {
                ...state,
                user: payload,
            };
        case Types.LOGOUT_USER:
            return {
                ...state,
                user: reducerUserInitialState.user,
            };
        default:
            return state;
    }
}

export default reducerUser;
