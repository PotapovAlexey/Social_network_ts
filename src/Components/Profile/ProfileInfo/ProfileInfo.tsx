import React from "react";
import style from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return (
        <div className={style.profileInfo}>
            <img className={style.mainImg}
                 src="https://ruskline.ru/images/%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0/%D0%9B%D0%B5%D1%81.jpg"
                 alt=""/>
            <div className={style.descriptionBlock}>
                ava + descriptions
            </div>


        </div>
    )
}
export default ProfileInfo