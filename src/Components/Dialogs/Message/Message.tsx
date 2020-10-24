import React from "react";
import style from "./Message.module.css";

type PropsType = {
    message: string
    id: number
}

const Message = (props: PropsType) => {
    return (
        <div className={style.messages}>

                {props.message}

        </div>
    )
}
export default Message