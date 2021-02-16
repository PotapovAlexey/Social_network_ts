import {
    ADD_POST,
    CHANGE_NEW_POST_TEXT,
    InitialProfileStateType, ProfileActionTypes,
    SET_USER_PROFILE
} from "./types";
import {profileAPI} from "../Api/api";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";


let initialState: InitialProfileStateType = {
    posts: [
        {id: 1, message: "Hello", likesCount: 15},
        {id: 2, message: "How are you?", likesCount: 25},
        {id: 3, message: "Its my first post", likesCount: 120},

    ],
    newPostText: "",
    profile: {
        userId: 0,
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        aboutMe: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: ''
        },
        photos: {
            small: '',
            large: ''
        }
    }
}


const profileReducer = (state = initialState, action: ProfileActionTypes) => {


    switch (action.type) {
        case ADD_POST:
            let newPost = state.newPostText
            return {...state, newPostText: '', posts: [...state.posts, {id: 5, message: newPost, likesCount: 0}]}
        case CHANGE_NEW_POST_TEXT :
            return {...state, newPostText: action.newText}
        case SET_USER_PROFILE :
            return {...state, profile: action.profile}

        default:
            return state
    }
}

export const addPostAC = (): ProfileActionTypes => ({type: ADD_POST})
export const changeNewPostTextAC = (text: string): ProfileActionTypes => ({type: CHANGE_NEW_POST_TEXT, newText: text})
export const setUserProfileAC = (profile: number): ProfileActionTypes => ({type: SET_USER_PROFILE, profile})







export const setUserIdThunk=(userId:string)=>{
    return (dispatch: Dispatch<ProfileActionTypes>, getState: AppStateType)=>{

        profileAPI.setUserId(userId).then(response=> {
            console.log("res",response)
            dispatch(setUserProfileAC(response))
        })

    }
}






export default profileReducer

