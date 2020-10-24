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
