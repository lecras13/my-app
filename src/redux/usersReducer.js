const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        /* {
             id: 1,
             photoUrl: 'https://yt3.ggpht.com/a/AATXAJwP-Cll0SICtcx5Yyddhrkcl4RKJZNVtyu9vuQn=s900-c-k-c0x00ffffff-no-rj',
             followed: false,
             fullName: "Dmitrii",
             status: "hello1",
             location: {city: "Minsk", country: "Belarus"}
         },*/
        /*   {
               id: 2,
               photoUrl: 'https://th.bing.com/th/id/OIP.5eTzsiVmsszqm8ZoCYf5EwHaH7?pid=ImgDet&rs=1',
               followed: true,
               fullName: "Dmitrii",
               status: "hello2",
               location: {city: "Minsk", country: "Belarus"}
           },
           {
               id: 3,
               photoUrl: 'https://th.bing.com/th/id/OIP.5eTzsiVmsszqm8ZoCYf5EwHaH7?pid=ImgDet&rs=1',
               followed: false,
               fullName: "Dmitrii",
               status: "hello3",
               location: {city: "Minsk", country: "Belarus"}
           }*/
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {
                ...state,
                //rewtite doesn't work
                /* users: [...state.users, action.users]*/
                users: action.users
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;