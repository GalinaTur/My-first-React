import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? s.linkActive : s.link;

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
console.log(props.avatar);
    return (
        <div className={s.dialog}>
            <img src= {props.avatar} className={s.avatar} alt='avatar'/>
            <NavLink to={path} className={setActive}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem;