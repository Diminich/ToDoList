import {api} from "./api";
import {ILogine} from "./types/interfaceLogineAC";

export const SET_IS_LOGIN = 'TodoList/logineReducer/SET_IS_LOGIN';
export const LOG_OUT = 'TodoList/logineReducer/LOG_OUT';
export const SET_EMAIL = 'TodoList/logineReducer/SET_EMAIL';
export const SET_PASSWORD = 'TodoList/logineReducer/SET_PASSWORD';

interface ILoginState {
    isLogin: boolean;
    email: string;
    password: string
}

const initialState: ILoginState = {
    isLogin: false,
    email: '',
    password: ''
};

const loginReducer = (state = initialState, action: ILogine) => {
    switch (action.type) {
        case SET_IS_LOGIN:
            return {
                ...state,
                isLogin: true
            };

        case LOG_OUT:
            return {
                ...state,
                isLogin: false
            };

        case SET_EMAIL:
            return {
                ...state,
                email: action.emailTitle
            };

        case SET_PASSWORD:
            return {
                ...state,
                password: action.passwordTitle
            }
    }
    return state
};

export const setLogin = () => {
    return {type: SET_IS_LOGIN}
};

export const logOut = () => {
    return {type: LOG_OUT}
};


export const inputEmailAC = (emailTitle: string) => {
    return {type: SET_EMAIL, emailTitle}
};

export const inputPasswordAC = (passwordTitle: string) => {
    return {type: SET_PASSWORD, passwordTitle}
};

export const loginTC = () => async (dispatch: any, getState: any) => {
    const state = getState();
    const response = await api.login(state.login.email, state.login.password);
    if (response.data.resultCode === 0) {
        dispatch(setLogin())
    }
};

export const logoutTC = () => async (dispatch: any) => {
    let response = await api.logout();
    if (response.data.resultCode === 0) {
        dispatch(logOut())
    }
};

export default loginReducer;