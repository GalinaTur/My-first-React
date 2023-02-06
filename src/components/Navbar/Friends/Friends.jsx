import s from './Friends.module.css';
import FriendItem from "./FriendItem/FriendItem";

const setActive = ({isActive}) => isActive ? s.linkActive : s.link;

const Friends = (props) => {
    return (
        <div>
            <h3>Friends</h3>
            <div className={s.friends}>
                <FriendItem name='Dymich' avatar='https://www.meme-arsenal.com/memes/c53ae0caf88a91bcedaf28ec9aae5969.jpg'/>
                <FriendItem name='Sergio' avatar='https://www.meme-arsenal.com/memes/c53ae0caf88a91bcedaf28ec9aae5969.jpg'/>
                <FriendItem name='Mama' avatar='https://www.meme-arsenal.com/memes/c53ae0caf88a91bcedaf28ec9aae5969.jpg'/>
            </div>
        </div>
)
}

export default Friends;