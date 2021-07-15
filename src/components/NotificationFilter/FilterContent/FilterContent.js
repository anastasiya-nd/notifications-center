import React from 'react';
import s from './FilterContent.module.sass'

const FilterContent = (props) => {
    return (
        <>
            <div className={s.filter_wrap}>
                <div className={s.btn_wrap}>
                    <button className={s.btn_reset} onClick={props.resetFilter}>Reset filter</button>
                </div>
                <ul className={s.filter_category} onClick={(e) => props.getFilterValue(e)}>
                    <li>
                        <input id='read' type='radio' name='isRead' value='true' />
                        <label htmlFor='read'>Read</label>
                    </li>
                    <li>
                        <input  id='unread' type='radio' name='isRead' value='false' />
                        <label htmlFor='unread'>Unread</label>
                    </li>
                </ul>
                <ul className={s.filter_category} onClick={(e) => props.getFilterValue(e)}>
                    <li>
                        <input  id='critical' type='radio' name='category' value='CRIT'/>
                        <label htmlFor='critical'>Critical</label>
                    </li>
                    <li>
                        <input id='warn' type='radio' name='category' value='WARN'/>
                        <label htmlFor='warn'>Warn</label>
                    </li>
                    <li>
                        <input id='error' type='radio' name='category' value='ERROR'/>
                        <label htmlFor='error'>Error</label>
                    </li>
                    <li>
                        <input id='info' type='radio' name='category' value='INFO'/>
                        <label htmlFor='info'>Info</label>
                    </li>
                    <li>
                        <input id='debug' type='radio' name='category' value='DEBUG'/>
                        <label htmlFor='debug'>Debug</label>
                    </li>
                </ul>
            </div>
            <button className={s.btn_apply} onClick={props.getNotificationsWithFilter}>Apply</button>
        </>
    )
}

export default FilterContent;