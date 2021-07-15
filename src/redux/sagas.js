import 'regenerator-runtime/runtime';
import { takeEvery, put, call, all} from "@redux-saga/core/effects";
import {notifications} from '../api/api';
import { REQUEST_NOTIFICATIONS, REQUEST_READING_NOTIFICATION, REQUEST_READING_ALL_NOTIFICATIONS } from './types';
import { getNotifications, readNotification, readAllNotifications } from './actions';


function* getNotificationsWorker(data) {
    const response = yield call(notifications.getNotifications, data.perPage, data.page, data.category, data.isRead)
    yield put(getNotifications(response.data.notifications, response.data.pagination, data.category, data.isRead))
}

function* getNotificationsWatcher() {
    yield takeEvery(REQUEST_NOTIFICATIONS, getNotificationsWorker)
}

function* readNotificationWorker(data) {
    yield call(notifications.readNotification, data.id)
    yield put(readNotification(data.id))
}

function* readNotificationWatcher() {
    yield takeEvery(REQUEST_READING_NOTIFICATION, readNotificationWorker)
}

function* readAllNotificationsWorker(data) {
    yield call(notifications.readAllNotifications)
    yield put(readAllNotifications(data.id))
}

function* readAllNotificationWatcher() {
    yield takeEvery(REQUEST_READING_ALL_NOTIFICATIONS, readAllNotificationsWorker)
}

export function* rootSaga() {
    yield all([
        getNotificationsWatcher(),
        readNotificationWatcher(),
        readAllNotificationWatcher()
    ])
}
