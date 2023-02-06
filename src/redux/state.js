import React from "react";

let rerenderEntireTree = () => {};

let state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych', avatar: 'https://www.meme-arsenal.com/memes/c53ae0caf88a91bcedaf28ec9aae5969.jpg'},
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
    },
    profilePage: {
        posts: [
            {id: 1, text: 'He-He:)', likesCount: 2},
            {id: 2, text: 'Why nobody love me?', likesCount: 15},
            {id: 3, text: 'Dymich, you are the best', likesCount: 99},
            {id: 4, text: 'Hello, world. I\'m learning React', likesCount: 12},
            {id: 5, text: 'Hi, how are you?', likesCount: 5},
            {id: 6, text: 'It\'s my first post', likesCount: 0},
        ],
        newPostText: '',
    },

};

export const addPost = () => {
    let newPost = {
        id: 7,
        text: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addNewMessage = () => {
    let newMessage = {
        id: 7,
        text: state.dialogsPage.newMessageText,
        sender: 'currentUser'
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export let subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;