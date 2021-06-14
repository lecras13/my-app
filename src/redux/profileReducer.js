import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    post: [
        {id: 1, message: "how' re you?", likesCount: 12},
        {id: 2, message: "How are you?", likesCount: 5},
        {id: 3, message: "Fine", likesCount: 5},
    ],

    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostElement,
                likesCount: 0
            };
            return {
                ...state,
                post: [...state.post, newPost],
                newPostText: '',
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostElement) => ({type: ADD_POST, newPostElement})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId).then(resp => {

            dispatch(setStatus(resp.data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status).then(resp => {
            if (resp.data.resultCode === 0) {
                dispatch(setStatus(status));
            }

        });
    }
}

export default profileReducer;