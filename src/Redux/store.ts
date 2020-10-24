

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";




/*



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello", likesCount: 15},
                {id: 2, message: "How are you?", likesCount: 25},
                {id: 3, message: "Its my first post", likesCount: 120},

            ],
            newPostText: ""
        },
        dialogsPage: {
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

        },

    },
    getState() {
        return this._state
    },
    _callSubscribers() {
        console.log("State changed")
    },

    subscribe(observer: () => void) {
        this._callSubscribers = observer;
    },

    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscribers()


    }

}


export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string

}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessage: string
}
type AddPostType = {
    type: "ADD_POST"

}
type ChangeNewPostTextType = {
    type: "CHANGE_NEW_POST_TEXT"
    newText: string

}
type AddDialogMessageType = {
    type: "ADD_DIALOG_MESSAGE"

}
type ChangeNewDialogMessage = {
    type: "CHANGE_NEW_DIALOG_MESSAGE"
    newMessage: string

}
export type ActionsTypes = AddPostType | ChangeNewPostTextType | AddDialogMessageType | ChangeNewDialogMessage







*/
