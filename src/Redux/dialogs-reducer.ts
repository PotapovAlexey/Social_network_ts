import {ActionsTypes} from "./types";


const CHANGE_NEW_DIALOG_MESSAGE = "CHANGE_NEW_DIALOG_MESSAGE"
const ADD_DIALOG_MESSAGE = "ADD_DIALOG_MESSAGE"


let initialState = {
    dialogs: [
        {id: 1, name: "Victor"},
        {id: 2, name: "Roma"},
        {id: 3, name: "Andrew"},
        {id: 4, name: "Alex"},
        {id: 5, name: "Alexander"},
    ],

    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "Yo"},
        {id: 3, message: "What are you doing"},
        {id: 4, message: "Whats the weather?"},
        {id: 5, message: "Maybe a glass of beer?"},
    ],
    newMessage: ""

}


export const dialogsReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_DIALOG_MESSAGE:
            let newMessage = state.newMessage
            return {
                ...state, newMessage: "", messages: [...state.messages, {id: 6, message: newMessage}]
            }
        case CHANGE_NEW_DIALOG_MESSAGE:
            return {...state, newMessage: action.newMessage}

        default:
            return state
    }

}

export const addDialogMessageAC = (): ActionsTypes => {
    return {type: ADD_DIALOG_MESSAGE}
}
export const changeNewDialogMessageAC = (text: string): ActionsTypes => {
    return {type: CHANGE_NEW_DIALOG_MESSAGE, newMessage: text}
}

export default dialogsReducer