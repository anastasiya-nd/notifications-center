import React from 'react';
import s from './TableHeader.module.sass';
import NotificationFilterContainer from '../../NotificationFilter/NotificationFilterContainer';

const NotificationsHeader = () => {
    return (
        <tr className={s.table_header}>
            <th className={`${s.th_item} ${s.th_category}`}>
                <NotificationFilterContainer />
            </th>
            <th className={`${s.th_item} ${s.th_text}`}>
                <span>Message</span>
            </th>
            <th className={`${s.th_item} ${s.th_date}`}>
                <span>Date</span>
            </th>
        </tr>
    )
};

export default NotificationsHeader;

