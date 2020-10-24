import React, {ChangeEvent} from "react";
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../Redux/types";



type PropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
    addDialogMessage:()=>void
    changeNewDialogMessage:(text:string)=>void
}


const Dialogs = (props: PropsType) => {

    let dialogsMap = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesMap = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>)

    let addDialogMessage = () => {
        props.addDialogMessage()
    }

    let changeNewDialogMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.changeNewDialogMessage(text)
    }


    return (
        <div className={style.dialogs}>
            <div>
                {dialogsMap}
            </div>
            <div>
                {messagesMap}
                <div>
                    <div>
                <textarea onChange={changeNewDialogMessage} placeholder="Send Message"
                          value={props.dialogsPage.newMessage}/>
                    </div>
                    <div>
                        <button onClick={addDialogMessage}>Add Post</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Dialogs



