import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


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

        case DELETE_POST: {
            return {
                ...state,
                post: state.post.filter(p => p.id != action.postId),
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostElement) => ({type: ADD_POST, newPostElement})

export const deletePostActionCreator = (postId) => ({type: DELETE_POST, postId})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileApi.getProfile(userId);

    dispatch(setUserProfile(response));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileApi.getStatus(userId);

    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileApi.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;