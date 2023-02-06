import s from './FriendItem.module.css';

const setActive = ({isActive}) => isActive ? s.linkActive : s.link;

const FriendItem = (props) => {
    return (
        <div>
            <img src={props.avatar} alt='avatar' className={s.avatar}/>
            <div>{props.name}</div>
        </div>
    )
}

export default FriendItem;