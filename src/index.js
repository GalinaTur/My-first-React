import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let state = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sergio'},
        {id: 3, name: 'Mama'},
        {id: 4, name: 'Papa'},
        {id: 5, name: 'Vlada'},
        {id: 6, name: 'Valera'},
    ],
    messages: [
        {id: 1, text: 'Hello, how are you?'},
        {id: 2, text: 'Yo mafaka'},
        {id: 3, text: 'Good night, honey!'},
        {id: 4, text: 'i love you...'},
        {id: 5, text: 'I am learning REACT!!'},
        {id: 6, text: 'bye-bye:)'},
    ],
    posts: [
        {id: 1, text: 'He-He:)', likesCount: 2},
        {id: 2, text: 'Why nobody love me?', likesCount: 15},
        {id: 3, text: 'Dymich, you are the best', likesCount: 99},
        {id: 4, text: 'Hello, world. I\'m learning React', likesCount: 12},
        {id: 5, text: 'Hi, how are you?', likesCount: 5},
        {id: 6, text: 'It\'s my first post', likesCount: 0},
    ],
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App data={state}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

