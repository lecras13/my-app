import React from "react";
import {sendMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        },
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    /*WithAuthRedirect,*/
)(Dialogs);
