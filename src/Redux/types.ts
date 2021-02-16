//User Reducer constants
export const FOLLOW = 'FOLLOW'
export const UNFOLLOW = 'UNFOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export const CHANGE_IS_FETCHING = 'CHANGE_IS_FETCHING'
export const SET_USER_DATA = 'SET_USER_DATA'


// UserReducer Type
export type InitialUserReducerStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
//ProfileReducer constants
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
export const ADD_POST = "ADD_POST"
export const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT"

//ProfileReducer Type
export type InitialProfileStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: any
}

//Types for Profile page

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string

}

//Profile Action Types
export type ProfileActionTypes =
    ChangeNewPostTextType
    | AddPostType
    | setUserProfileAcType

type AddPostType = {
    type: 'ADD_POST'

}
type ChangeNewPostTextType = {
    type: 'CHANGE_NEW_POST_TEXT'
    newText: string

}
type setUserProfileAcType = {
    type: typeof SET_USER_PROFILE
    profile: number
}
//Types for Dialog Page

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessage: string
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}


//Types for users


export type UsersType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
    location: UsersLocationType
    country: string
    city: string


}
export type PhotosType = {
    small: string
    large: string
}
export type UsersLocationType = {
    city: string
    country: string
}


//Types for actions
export type ActionsTypes =

    AddDialogMessageType
    | ChangeNewDialogMessageType
    | SetUsersType
    | FollowType
    | UnFollowType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ChangeIsFetchingType


type FollowType = {
    type: 'FOLLOW'
    userId: number
}
type UnFollowType = {
    type: 'UNFOLLOW'
    userId: number
}
type SetUsersType = {
    type: 'SET_USERS'
    users: Array<UsersType>
}
type SetCurrentPageType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}

type AddDialogMessageType = {
    type: 'ADD_DIALOG_MESSAGE'

}
type ChangeNewDialogMessageType = {
    type: 'CHANGE_NEW_DIALOG_MESSAGE'
    newMessage: string

}
type SetTotalUsersCountType = {
    type: 'SET_TOTAL_USERS_COUNT'
    totalUsersCount: number

}
type ChangeIsFetchingType = {
    type: 'CHANGE_IS_FETCHING'
    isFetching: boolean

}

//Types for Ac
export type UserReducerAcTypes =
    followAcTypes
    | unFollowAcTypes
    | setUsersAcTypes
    | setCurrentPageAcType
    | setTotalUsersCountACType
    | changeIsFetchingACType

type followAcTypes = {
    userId: number
    type: typeof FOLLOW
}
type unFollowAcTypes = {
    userId: number
    type: typeof UNFOLLOW
}
export type setUsersAcTypes = {
    users: Array<UsersType>
    type: typeof SET_USERS
}
export type setCurrentPageAcType = {
    currentPage: number
    type: typeof SET_CURRENT_PAGE
}
export type setTotalUsersCountACType = {
    totalUsersCount: number
    type: typeof SET_TOTAL_USERS_COUNT
}
export type changeIsFetchingACType = {
    isFetching: boolean
    type: typeof CHANGE_IS_FETCHING
}
//authReducerTypes
export type AuthReducerType = AuthAC
export type AuthAC = {
    type: typeof SET_USER_DATA
    data:InitialAuthReducerStateType
}
export type InitialAuthReducerStateType = {
    id:number
    email:string
    login:string
}
/*
export type DataType={
    id:number
    email:string
    login:string
}
*/
