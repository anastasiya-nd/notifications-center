import { applyMiddleware, createStore } from "redux";
// import thunkMiddleware from 'redux-thunk';
import {notificationReducer} from './notificationReducer';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from "./sagas";


let saga = createSagaMiddleware();

let store = createStore(notificationReducer, applyMiddleware(saga))

saga.run(rootSaga);

// let store = createStore(notificationsReducer, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;