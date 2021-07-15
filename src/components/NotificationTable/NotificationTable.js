import React from 'react';
import TableHeader  from './TableHeader/TableHeader';
import NotificationItem from './NotificationItem/NotificationItem';
import PaginationContainer from './Pagination/PaginationContainer';
import MarkAllButtonContainer from './MarkAllButton/MarkAllButtonContainer';
import s from './NotificationTable.module.sass';

const NotificationTable = (props) => {
    let notifications = props.notificationsData.map((item) => {
        return (
            <NotificationItem
                key={item.ID} 
                itemProps={item}
                readNotification={props.readNotification} />
        )
    })

    return (
        <table className={s.table}>
            <thead className={s.thead}>
               <TableHeader />
            </thead> 
            <tbody className={s.tbody}>
                {notifications}
            </tbody>
            <tfoot className={s.tfoot}>
                <tr>
                    <td>
                        <PaginationContainer />
                    </td>
                </tr>
                <tr>
                    <td>
                        <MarkAllButtonContainer />
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}

export default NotificationTable;

