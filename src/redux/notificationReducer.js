import { GET_NOTIFICATIONS, READ_NOTIFICATION, READ_ALL_NOTIFICATIONS } from './types';
// import { getNotifications, readNotification, readAllNotifications } from './actions';
// import {notifications} from '../api/api'


let initialState = {
    notificationsData: [],
    pagination: {
        perPage: 10,
        page: 1,
        total: undefined
    },
    isRead: undefined,
    category: undefined,
}

export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTIFICATIONS:
            return {
                ...state,
                notificationsData: [...action.notifications],
                pagination: {...action.pagination}, 
                category: action.category, 
                isRead: action.isRead
            }
        case READ_NOTIFICATION:
            return {
                ...state, 
                notificationsData: state.notificationsData.map((item) => {
                    if ( item.ID === action.notificationId ) {
                        return {...item, isRead: true}

                    }
                    return item
                })
            }
        case READ_ALL_NOTIFICATIONS: 
            return {
                ...state,
                notificationsData: state.notificationsData.map(item => {
                    return {...item, isRead: true}
                })
            }
        default: 
            return state;
    }
}



// export const getNotificationsThunkCreator = (perPage, page, category, isRead) => {
//     return ((dispatch) => {
//         notifications.getNotifications(perPage, page, category, isRead)
//         .then( response => {
//             dispatch(getNotifications(response.data.notifications, response.data.pagination, category, isRead))
//         })
//     })
// }

// export const readNotificationThunkCreator = (id) => {
//     return (dispatch) => {
//         notifications.readNotification(id)
//             .then ( response => {
//                 if( response.status === 200) {
//                     dispatch(readNotification(id))
//                 }
//             })
//     }
// }

// export const readAllNotificationsThunkCreator = () => {
//     return (dispatch) => {
//         notifications.readAllNotifications()
//             .then( response => {
//                 if(response.status === 200) {
//                     dispatch(readAllNotifications())
//                 }
//             })
//     }
// }
