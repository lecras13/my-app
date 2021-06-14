import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../assets/common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)


    let AddNewMessage = (values) => {

        props.onSendMessageClick(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
            </div>
            <AddMessageFormRedux onSubmit={AddNewMessage}/>
        </div>
    );
}

const maxLength20 = maxLengthCreator(20);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength20]} name="newMessageBody"
                       placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;