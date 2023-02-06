import React from "react";
import s from './Dialogs.module.css'
import Messages from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";
import {updateNewMessageText} from "../../redux/state";


const setActive = ({isActive}) => isActive ? s.linkActive : s.link;

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} avatar={d.avatar}
                                                                     key={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map((m) => <Messages id={m.id} text={m.text} sender={m.sender}
                                                                     key={m.id}/>)

    let newMessage = React.createRef();

    let addNewMessage = () => {
        props.addNewMessage();
    }

    let updateNewMessageText = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>

                <div className={s.messagesItems}>
                    {messagesElements}
                </div>
                <div>
                    <textarea onChange={updateNewMessageText} ref={newMessage} className={s.textarea} placeholder='Enter a message...'
                              cols='100' rows='1' value={props.dialogsPage.newMessageText}></textarea>
                    <div>
                        <button onClick={addNewMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;