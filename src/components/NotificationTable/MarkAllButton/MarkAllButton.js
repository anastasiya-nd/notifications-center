import React from 'react';
import s from './MarkAllButton.module.sass'

const MarkAllButton = (props) => {
    return (
        <button 
            className={s.btn}
            onClick={() =>  props.readAllNotifications()}>
            Mark all as Read
        </button>
    )
}

export default MarkAllButton;