import {rerenderEntireTree} from "../render";

let state = {
    profilePages: {
        post: [
            {id: 1, message: "how' re you?", likesCount: 12},
            {id: 2, message: "How are you?", likesCount: 5},
            {id: 3, message: "Fine", likesCount: 5},
        ],
        newPostText: 'it-kamasutra'
    },
    dialogPages: {
        dialogs: [
            {id: 1, name: "Имя1"},
            {id: 2, name: "Имя2"},
            {id: 3, name: "Имя3"},
            {id: 4, name: "Имя4"},
            {id: 5, name: "Имя5"},
        ],
        messages: [
            {id: 1, message: "HI"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Fine"},
        ]
    }
}

window.state=state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePages.newPostText,
        likesCount: 0
    };
    state.profilePages.post.push(newPost);
    state.profilePages.newPostText='',
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText)=>{
    state.profilePages.newPostText = newText;
    rerenderEntireTree(state);
}


export default state;