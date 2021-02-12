import React, {ChangeEvent} from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ProfilePageType} from "../../../Redux/types";

type PropsType = {
    profilePage: ProfilePageType
    onTextAreaChangeHandler:(text:string)=>void
    addPost:()=>void

}


const MyPosts = (props: PropsType) => {

    let postsMap = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    let addPost = () => {
        props.addPost()
    }
    let onTextAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onTextAreaChangeHandler(text)
    }


    return (
        <div className={style.myPosts}>
            My Posts
            <div>
                <textarea onChange={onTextAreaChangeHandler} value={props.profilePage.newPostText}
                          placeholder="Add Message"/>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div>
                {postsMap}
            </div>
        </div>


    )
}

export default MyPosts