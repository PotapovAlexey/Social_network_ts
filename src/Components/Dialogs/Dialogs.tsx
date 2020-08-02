import React from "react";
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <div className={style.dialog}>
                    <DialogItem name="Dimich" id="1"/>
                    <DialogItem name="Roma" id="2"/>
                    <DialogItem name="Anrew" id="3"/>
                    <DialogItem name="Alex" id="4"/>
                    <DialogItem name="Alexander" id="5"/>
                </div>
            </div>

            <div>
            <Message message="Hello"/>
            <Message message="Yo"/>
            <Message message="What are you doing"/>
            <Message message="Whats the weather ?"/>
            <Message message="Maybe a glass of beer?"/>
            </div>

        </div>
    )
}
export default Dialogs



