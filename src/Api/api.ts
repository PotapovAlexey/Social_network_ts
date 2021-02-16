import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        )
            .then(response => {
                return response.data
            })
    }
}
export const profileAPI = {
    setUserId(userId: string) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    }
}


export const setUsersData = () => {
    return instance.get(`auth/me`).then(response => {
        if (response.data.resultCode === 0) {
            return response.data.data
        }
    })
}


/*
export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
    )
        .then(response => {
            return response.data
        })
}
*/