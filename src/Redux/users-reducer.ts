import {ActionsTypes, InitialUserReducerStateType, UserReducerAcTypes, UsersType} from './types';
import {
    CHANGE_IS_FETCHING,
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    UNFOLLOW
} from './types';
import axios from "axios";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {getUsers} from "../Api/api";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";
import {Simulate} from "react-dom/test-utils";


type ThunkType = ThunkAction<void, InitialUserReducerStateType, unknown, ActionsTypes>

let initialState: InitialUserReducerStateType = {
    users: [
        {
            id: 1,
            name: 'Alex',
            status: '',
            photos: {small: '', large: ''},
            followed: true,
            location: {city: '', country: ''},
            country: '',
            city: ''
        }
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}


const usersReducer = (state: InitialUserReducerStateType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case CHANGE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default :
            return state

    }

}

export const followAC = (userId: number): UserReducerAcTypes => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number): UserReducerAcTypes => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UsersType>): UserReducerAcTypes => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): UserReducerAcTypes => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount: number): UserReducerAcTypes => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})
export const changeIsFetchingAC = (isFetching: boolean): UserReducerAcTypes => ({type: CHANGE_IS_FETCHING, isFetching})


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionsTypes>, getState: AppStateType) => {
        dispatch(changeIsFetchingAC(true))
        getUsers(currentPage, pageSize).then(data => {
            dispatch(changeIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount))
        }).catch((error: any)=>{dispatch(changeIsFetchingAC(false))})
    }
}

export default usersReducer


/*


export const getUsersThunk=():ThunkType=>
    async(dispatch,getState)=>{

    try {
       let items= await  API.getUsers()
        dispatch(setUsersAC(items))
    }
    catch(e){
        alert("ХУЙ ТЕБЕ А НЕ ЗАПРОС")
    }
    }*/
