import React from "react";
import style from "../Dialogs.module.css";

type PropsType={
    message:string
}

const Message=(props:PropsType)=>{
    return(
        <div className={style.messages}>
        <div className={style.message}>{props.message}</div>
        </div>
            )
}
export default Message