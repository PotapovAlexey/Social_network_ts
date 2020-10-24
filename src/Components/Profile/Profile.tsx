import React from "react";
import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../Redux/types";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = () => {
    return (
        <div className={style.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile