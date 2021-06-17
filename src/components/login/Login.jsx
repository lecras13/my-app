import React from "react";
import {reduxForm} from "redux-form";
import {CreateField, Input} from "../../assets/common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from "./../../assets/common/FormControls/FormControl.module.css";


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField("Email", "email", [required], Input)}
            {CreateField("Password", "password", [required], Input, {type: "password"})}
            {CreateField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

            {error && <div className={styles.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,

})

export default connect(mapStateToProps, {login})(Login);