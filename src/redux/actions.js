import { GET_NOTIFICATIONS, READ_NOTIFICATION, READ_ALL_NOTIFICATIONS, REQUEST_NOTIFICATIONS, REQUEST_READING_NOTIFICATION, REQUEST_READING_ALL_NOTIFICATIONS } from './types';


export const readNotification = (notificationId) => {
    return {
        type: READ_NOTIFICATION,
        notificationId
    }
}

export const getNotifications = (notifications, pagination, category, isRead) => {
    return {
        type: GET_NOTIFICATIONS,
        notifications, 
        pagination, 
        category, 
        isRead
    }
}

export const readAllNotifications = () => {
    return {
        type: READ_ALL_NOTIFICATIONS,
    }
}

export const requestNotifications = (perPage, page, category, isRead) => {
    return {
        type: REQUEST_NOTIFICATIONS,
        perPage, 
        page, 
        category, 
        isRead
    }
}

export const requestReadingNotification = (id) => {
    return {
        type: REQUEST_READING_NOTIFICATION,
        id
    }
}

export const requestReadingAllNotifications = () => {
    return {
        type: REQUEST_READING_ALL_NOTIFICATIONS,
    }
}