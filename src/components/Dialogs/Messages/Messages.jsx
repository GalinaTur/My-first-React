import s from './Messages.module.css'

const setActive = ({isActive}) => isActive ? s.linkActive : s.link;

const Messages = (props) => {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    )
}

export default Messages;