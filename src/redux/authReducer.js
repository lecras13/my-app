import {authApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {
        userId,
        email,
        login,
        isAuth,
    }
})

export const getAuthUserData = () => {
    return (dispatch) => {
        authApi.me()
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    let {id, email, login} = resp.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe)
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                }
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        authApi.logout()
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
    }
}

export default authReducer;