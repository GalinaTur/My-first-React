import s from './Messages.module.css'

const setActive = ({isActive}) => isActive ? s.linkActive : s.link;

const Messages = (props) => {

    let sender = props.sender == 'currentUser' ? s.currentUser : s.anotherUser;

    return (
        <div>
            <div className={s.message + ' ' + sender}>
                <img className={s.avatar} src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'/>
                <span className={s.messageText}>{props.text}</span>
            </div>
        </div>
    )
}

export default Messages;