import axios from 'axios';

export const notifications= {
    getNotifications(perPage = 10, page = 1, category, isRead) {
        // console.log(perPage, page, category, isRead)
        return axios.get('http://localhost:3000/api/v1/notifications',{
            params: {
                perPage, 
                page,
                category,
                isRead
            },
        })
    }, 
    readNotification(id) {
        return axios.put(`http://localhost:3000/api/v1/notifications/${id}`, {
            params: {
                id: id
            }
        })
    },
    readAllNotifications(perPage = 10, page = 1) {
        return axios.put(`http://localhost:3000/api/v1/notifications`,{
            params: {
                perPage, 
                page,
            },
        })
    }
}

