import {
    USER_LOGIN,
    USER_LOGOUT,
    USER_REGISTER,
} from '../types/UserTypes.js';
import {USER_INFO} from '../../utils/setting.js'

let auth = {};
if (localStorage.getItem(USER_INFO)) {
  auth = JSON.parse(localStorage.getItem(USER_INFO));
}

const initialState = {
    user: auth,
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            state.user = action.value;
            localStorage.setItem(USER_INFO, JSON.stringify(state.user));
            return { ...state };
        case USER_LOGOUT:
            state.user = action.value;
            localStorage.removeItem(USER_INFO);
            return { ...state };
        case USER_REGISTER:
            return { ...state, user: action.value };
        default:
            return state;
    }
}