import React from "react";
import style from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return (
        <div className={style.profileInfo}>
            <img className={style.mainImg}
                 src="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg"
                 alt=""/>
            <div className={style.descriptionBlock}>
                ava + descriptions
            </div>


        </div>
    )
}
export default ProfileInfo