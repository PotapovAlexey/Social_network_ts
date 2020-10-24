import React from "react";
import {addDialogMessageAC, changeNewDialogMessageAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";



const DialogsContainer = () => {

let dispatch=useDispatch();
let store=useSelector((state:AppStateType)=>state);
debugger;


    let addDialogMessage = () => {
       dispatch(addDialogMessageAC())
    }

    let changeNewDialogMessage = (text:string) => {
        dispatch(changeNewDialogMessageAC(text))
    }


    return (<Dialogs dialogsPage={store.dialogsPage} dispatch={dispatch} addDialogMessage={addDialogMessage}
                     changeNewDialogMessage={changeNewDialogMessage}/>)
}
export default DialogsContainer



