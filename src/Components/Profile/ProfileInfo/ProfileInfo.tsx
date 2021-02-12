import React from "react";
import style from "./ProfileInfo.module.css"
import Preloader from "../../../Preloader/Preloader";

type PropsType = {
    profile: any
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={style.profileInfo}>
            <img className={style.mainImg}
                 src="https://ruskline.ru/images/%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0/%D0%9B%D0%B5%D1%81.jpg"
                 alt="image1"/>
            <div className={style.descriptionBlock}>
                <div><img src={props.profile.photos.large} alt="UserPhoto"/></div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.contacts.facebook}</div>


                ava + descriptions
            </div>


        </div>
    )
}
export default ProfileInfo