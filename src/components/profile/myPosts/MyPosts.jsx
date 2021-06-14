import React from "react";
import s from './MyPosts.module.css';
import Post from "./post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef();

    let addPost = (values) => {
        props.addPost(values.newPostElement);
    }


    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <AddNewPostFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostElement"/>
            </div>
            <div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm);


export default MyPosts;