import {ActionsTypes} from "./types";


const ADD_POST = "ADD_POST"
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT"

let initialState = {
    posts: [
        {id: 1, message: "Hello", likesCount: 15},
        {id: 2, message: "How are you?", likesCount: 25},
        {id: 3, message: "Its my first post", likesCount: 120},

    ],
    newPostText: ""
}


const profileReducer = (state = initialState, action: ActionsTypes) => {



    switch (action.type) {
        case ADD_POST:
            let newPost = state.newPostText
            return {...state, newPostText: '', posts: [...state.posts, {id: 5, message: newPost, likesCount: 0}]}
        case CHANGE_NEW_POST_TEXT :
            return {...state, newPostText: action.newText}
        default:
            return state
    }
}

export const addPostAC = (): ActionsTypes => {
    return {type: ADD_POST}
}

export const changeNewPostTextAC = (text: string): ActionsTypes => {
    return {type: CHANGE_NEW_POST_TEXT, newText: text}
}

export default profileReducer