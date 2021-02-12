import React from "react";
import {addDialogMessageAC, changeNewDialogMessageAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";



const DialogsContainer = () => {

let dispatch=useDispatch();
let dialogsPage=useSelector((state:AppStateType)=>state.dialogsPage);



    let addDialogMessage = () => {
       dispatch(addDialogMessageAC())
    }

    let changeNewDialogMessage = (text:string) => {
        dispatch(changeNewDialogMessageAC(text))
    }


    return (<Dialogs dialogsPage={dialogsPage} dispatch={dispatch} addDialogMessage={addDialogMessage}
                     changeNewDialogMessage={changeNewDialogMessage}/>)
}
export default DialogsContainer



