const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Dimych',
            avatar: 'https://www.meme-arsenal.com/memes/c53ae0caf88a91bcedaf28ec9aae5969.jpg'
        },
        {id: 2, name: 'Sergio', avatar: 'https://www.blast.hk/attachments/64804/'},
        {
            id: 3,
            name: 'Mama',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjyX3Zls98fBypHDJEgt4rDbR_XvHPqhbjg&usqp=CAU'
        },
        {
            id: 4,
            name: 'Papa',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLn3tuyxUh6B93ao0WlTikMvolJ_LdgvTXrA&usqp=CAU'
        },
        {
            id: 5,
            name: 'Vlada',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEcIMH0pwffCbskbuSa-X5bvnUwWavnn1OFw&usqp=CAU'
        },
        {
            id: 6,
            name: 'Valera',
            avatar: 'https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg'
        },
    ],
    messages: [
        {id: 1, text: 'Hello, how are you?', sender: 'anotherUser'},
        {id: 2, text: 'I\'m fine, learning react, and you?', sender: 'currentUser'},
        {id: 3, text: 'Me too, thank you, good night', sender: 'anotherUser'},
        {id: 4, text: 'i love you...', sender: 'currentUser'},
        {id: 5, text: '<3', sender: 'anotherUser'},
        {id: 6, text: 'bye-bye:)', sender: 'currentUser'},
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            let newMessage = {
                id: 7,
                text: state.newMessageText,
                sender: 'currentUser'
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText;
            return state;
        }
    }
    return state;
}

export const addNewMessageActionCreator = () => ({type:ADD_NEW_MESSAGE});
export const updateNewMessageTextActionCreator = text => ({type:UPDATE_NEW_MESSAGE_TEXT, newText: text});
export default dialogsReducer;