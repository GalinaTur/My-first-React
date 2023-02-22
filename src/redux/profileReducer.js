
const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, text: 'He-He:)', likesCount: 2},
        {id: 2, text: 'Why nobody love me?', likesCount: 15},
        {id: 3, text: 'Dymich, you are the best', likesCount: 99},
        {id: 4, text: 'Hello, world. I\'m learning React', likesCount: 12},
        {id: 5, text: 'Hi, how are you?', likesCount: 5},
        {id: 6, text: 'It\'s my first post', likesCount: 0},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            let newPost = {
                id: 7,
                text: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state;
        }
    }
    return state;
}

export const addNewPostActionCreator = () => ({type:ADD_NEW_POST});
export const updateNewPostTextActionCreator = text => ({type:UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;