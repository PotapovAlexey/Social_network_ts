import React from "react";
import style from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={style.profile}>
            <img className={style.mainImg}
                 src="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg"
                 alt=""/>
            <div>
                ava + descriptions
            </div>
            <MyPosts/>

        </div>
    )
}
export default Profile