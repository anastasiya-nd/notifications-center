import React from 'react';
import s from './Pagination.module.sass'

const Pagination = ({pages, onPageChange, page, total}) => {
    const pagesArray = pages.map( p => { return p.text ? ( 
            <li key={p.key}>
                <a
                    onClick={() => {onPageChange(p.value)}}
                    className={(+page === +p.value ? s.active : ((+p.value === 0 || +p.value === +total+1 || +total === 0) ? s.disabled : null))}>
                    {p.text}
                </a>
            </li>
        ) : ( <li key={p.key}> <span>...</span> </li> )  
    })
    return (
        <ul className={s.pagination}>
           {pagesArray}
        </ul>
    )
}

export default Pagination;




