import React from "react";
import {addPostAC, changeNewPostTextAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";



const MyPostsContainer = () => {

    const dispatch=useDispatch()
    const profilePage=useSelector((state:AppStateType)=>state.profilePage)


    let addPost = () => {
        dispatch(addPostAC())
    }
    let onTextAreaChangeHandler = (text:string) => {
       dispatch(changeNewPostTextAC(text))
    }


    return <MyPosts profilePage={profilePage}
                    addPost={addPost} onTextAreaChangeHandler={onTextAreaChangeHandler}

    />
}

export default MyPostsContainer