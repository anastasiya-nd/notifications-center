import React, {Component} from 'react';
import s from './NotificationItem.module.sass';


class NotificationItem extends Component {
    getGategoryName = (category) => {
        switch (category.toLowerCase()) {
            case 'warn':
                return s.warn
            case 'crit':
                return s.crit
            case 'error':
                return s.error
            case 'info':
                return s.info
            case 'debug':
                return s.debug
            default:
                return s.lineReading
        }
    }    
    
    render () {
        let {category, text, createdOn, isRead, ID} = this.props.itemProps;
        let classes = `${s.notification_item} ${isRead ? s.reading : (s.unreading + ' ' + this.getGategoryName(category))}`;
        return (
            <tr className={classes} onClick={() => this.props.readNotification(ID)}>
                <td className={`${s.td_item} ${s.td_category}`}>
                    {category}
                </td>
                <td className={`${s.td_item} ${s.td_text}`}>
                    {text}
                </td>
                <td className={`${s.td_item} ${s.td_date}`}>
                    {createdOn}
                </td>
            </tr>
        )
    }
}

export default NotificationItem;
