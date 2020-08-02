import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={style.myPosts}>
            My Posts
            <div>
                <textarea placeholder="Add Message"></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <div>
                <Post message="Hello" likesCount="likes 15"/>
                <Post message="How are you?" likesCount="likes 25"/>
                <Post message="Its my first post" likesCount="likes 15"/>
            </div>
        </div>


    )
}
export default MyPosts