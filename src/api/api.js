import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "185e2efb-6d00-4c4d-b75e-060d6b42be97"
    },
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },

    getProfileUser(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            });
    },

   /* followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    },

    unfollowUser(userId) {
        return instance.delete(`unfollow/${userId}`)
            .then(response => {
                return response.data;
            });
    },*/
}
