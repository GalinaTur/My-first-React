import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => <Post id={p.id} message ={p.text} likesCount ={p.likesCount} key={p.id}/>)

    return (
        <div className={s.content}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea></textarea>
                    <div><button>Add post</button></div>
                </div>

                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;