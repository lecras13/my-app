import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.post,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostElement) => {
            dispatch(addPostActionCreator(newPostElement));
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;