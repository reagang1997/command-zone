import {
    LOGIN
} from "./actions";


const initialState = {
    user: {}
};

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};

export default reducers;