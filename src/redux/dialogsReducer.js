const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE_TEXT = 'SEND-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.body;
            return state;
        case SEND_NEW_MESSAGE_TEXT:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_NEW_MESSAGE_TEXT})

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body})

export default dialogsReducer;