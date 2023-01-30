import s from './Dialogs.module.css'
import Messages from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";

const setActive = ({isActive}) => isActive ? s.linkActive : s.link;

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = props.messages.map((m) => <Messages id={m.id} text={m.text} key={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messagesItems}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;