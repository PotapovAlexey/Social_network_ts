import {AuthReducerType, InitialAuthReducerStateType} from './types';
import {SET_USER_DATA,} from './types';
import {ThunkAction} from "redux-thunk";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";
import {setUsersData} from "../Api/api";


type ThunkType = ThunkAction<void, InitialAuthReducerStateType, unknown, AuthReducerType>

let initialState: InitialAuthReducerStateType = {
        id: 0,
        email: '',
        login: ''

}


const authReducer = (state: InitialAuthReducerStateType = initialState, action: AuthReducerType) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data

            }
        default :
            return state

    }

}

export const setAuthUserData = (data:InitialAuthReducerStateType): AuthReducerType => ({type: SET_USER_DATA, data})


export const setUserDataThunk = () => {

    return (dispatch: Dispatch<AuthReducerType>, getState: AppStateType) => {
        setUsersData().then(response => {
            dispatch(setAuthUserData(response))
            console.log("res",response)})

    }
}

export default authReducer

