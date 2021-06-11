import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ed64eef7-5d43-4f49-8c07-942481e017c4"
    },
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`);
    },

    unfollowUser(userId) {
        return instance.delete(`unfollow/${userId}`);
    },
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },


}

export const authApi = {
    me() {
        return instance.get(`auth/me`);
    }
}
