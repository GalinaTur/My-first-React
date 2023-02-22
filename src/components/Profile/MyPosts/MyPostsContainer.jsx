import React from "react";
import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => props.store.dispatch(addNewPostActionCreator());

    let onPostChange = (text) => props.store.dispatch(updateNewPostTextActionCreator(text));

    return (<MyPosts onAddPost={addPost} updateNewPostText={onPostChange} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>)
}

export default MyPostsContainer;