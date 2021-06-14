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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE_TEXT:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_NEW_MESSAGE_TEXT, newMessageBody})


export default dialogsReducer;