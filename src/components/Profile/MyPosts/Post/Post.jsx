import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386.jpg'></img>
            {props.message}
            <div>
                <span>like </span><span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;