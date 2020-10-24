import React from "react";
import {NavLink} from "react-router-dom";
import style from "./DialogItem.module.css"

type PropsType = {
    name: string
    id: number
}

const DialogItem = (props: PropsType) => {
    return (
        <div className={style.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;