import React from "react";
import style from "./Post.module.css"

type PropsType=  {
    message:string
    likesCount:string
}



const Post = (props:PropsType) => {
    return (
        <div className={style.eachPost}>

            <div>
                <img className={style.icon} src="https://s00.yaplakal.com/pics/pics_original/0/0/8/10694800.jpg"
                     alt="icon"/>
                {props.message}
                <div>
                    <span>{props.likesCount}</span>
                </div>
            </div>
        </div>


    )
}
export default Post