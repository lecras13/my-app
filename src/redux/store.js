import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: "how' re you?", likesCount: 12},
                {id: 2, message: "How are you?", likesCount: 5},
                {id: 3, message: "Fine", likesCount: 5},
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
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
            ],
            newMessageBody: "",
        },
        sidebar: {},
    },

    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
}

window.store = store;

export default store;