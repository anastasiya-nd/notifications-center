import React from 'react';
import s from './NotificationFilter.module.sass'
import FilterContent from './FilterContent/FilterContent'

const NotificationFilter = (props) => {
    return (
        <div className={s.filter}>
            <span>Category</span>
            <div className={s.filter_content}>
                <FilterContent 
                    getFilterValue={props.getFilterValue}
                    getNotificationsWithFilter={props.getNotificationsWithFilter}
                    resetFilter={props.resetFilter} />
            </div>
        </div>
    )
}

export default NotificationFilter;