import {SET_IS_LOGIN, LOG_OUT, SET_EMAIL, SET_PASSWORD} from '../loginReducer'

export type ILogine = ISetIsLogin | ILogOut | ISetEmail | ISetPassword

export interface ISetIsLogin {
    type: typeof SET_IS_LOGIN
    isLogin: boolean
}

export interface ILogOut {
    type: typeof LOG_OUT
    isLogin: boolean
}

export interface ISetEmail {
    type: typeof SET_EMAIL
    emailTitle: string
}

export interface ISetPassword {
    type: typeof SET_PASSWORD
    passwordTitle: string
}