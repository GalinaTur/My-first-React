import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => <Post id={p.id} message ={p.text} likesCount ={p.likesCount} key={p.id}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => props.onAddPost();

    let onPostChange =() => props.updateNewPostText(newPostElement.current.value);

    return (
        <div className={s.content}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} className={s.textarea} placeholder='Create New Post Here...' cols='100' rows='2' value={props.newPostText}/>
                    <div><button onClick={onAddPost}>Add post</button></div>
                </div>

                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;