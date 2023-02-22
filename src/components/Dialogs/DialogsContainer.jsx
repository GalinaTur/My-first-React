import React from "react";
import Messages from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addNewMessage = () => props.store.dispatch(addNewMessageActionCreator());

    let updateNewMessageText = (text) => props.store.dispatch(updateNewMessageTextActionCreator(text));

    return (
        <Dialogs dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 newMessageText={state.dialogsPage.newMessageText}
                 addNewMessage={addNewMessage}
                 updateNewMessageText={updateNewMessageText}/>
    )
}

export default DialogsContainer;