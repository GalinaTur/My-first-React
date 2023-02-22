import React from "react";
import s from './Dialogs.module.css'
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map((d) =>
        <DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id}/>);

    let messagesElements = props.messages.map((m) =>
        <Messages id={m.id} text={m.text} sender={m.sender} key={m.id}/>);

    let newMessage = React.createRef();

    let onAddNewMessage = () => props.addNewMessage();

    let onUpdateNewMessageText = () => props.updateNewMessageText(newMessage.current.value);

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
                    <textarea onChange={onUpdateNewMessageText} ref={newMessage} className={s.textarea} placeholder='Enter Your Message...'
                              cols='100' rows='1' value={props.newMessageText}></textarea>
                    <div>
                        <button onClick={onAddNewMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;