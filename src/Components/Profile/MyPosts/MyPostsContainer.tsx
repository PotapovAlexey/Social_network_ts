import React from "react";
import {addPostAC, changeNewPostTextAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";



const MyPostsContainer = () => {

    const dispatch=useDispatch()
    const store=useSelector((state:AppStateType)=>state)


    let addPost = () => {
        dispatch(addPostAC())
    }
    let onTextAreaChangeHandler = (text:string) => {
       dispatch(changeNewPostTextAC(text))
    }


    return <MyPosts profilePage={store.profilePage} dispatch={dispatch}
                    addPost={addPost} onTextAreaChangeHandler={onTextAreaChangeHandler}

    />
}

export default MyPostsContainer