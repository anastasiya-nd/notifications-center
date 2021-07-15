import React, {Component} from 'react';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import { requestNotifications} from '../../../redux/actions'

class PaginationContainer extends Component {

    onPageChange = (page) => {
        this.props.requestNotifications(this.props.perPage, page, this.props.category, this.props.isRead)
    }

    createPaginationItems = () => {
        let pages = [],
            {page, total} = this.props;
        
        pages.push({text: `<`, value: `${+page - 1}`, key: `prevPage`})

        pages.push({text: 1, value: 1, key: `page_${1}`})
        
        if (+page - 3 > 1){
            pages.push({text: '', value: '', key: 'leftDots'})
        }

        let items = [
        {text: `${+page-2}`, value: `${+page-2}`, key: `page_${+page-2}`},
        {text: `${+page-1}`, value: `${+page-1}`, key: `page_${+page-1}`},
        {text: `${+page}`, value: `${+page}`, key: `page_${+page}`},
        {text: `${+page+1}`, value: `${+page+1}`, key: `page_${+page+1}`},
        {text: `${+page+2}`, value: `${+page+2}`, key: `page_${+page+2}`},
        ]

        let filterItems = items.filter(i => (i.value > 1 && i.value < total));

        filterItems.forEach(item => {
            pages.push({text: `${item.text}`, value: `${item.value}`, key: `page_${item.key}`})
        })
        
        if (+page  < total-3) {
            pages.push({text: ``, value: ``, key: `rightDots`})
        }

        if (total > 1) {
            pages.push({text: `${total}`, value: `${total}`, key: `page_${total}`})
        }

        pages.push({text: `>`, value: `${+page + 1}`, key: `nextPage`})

        return pages; 
    }
  
    render() {
        return (
            <Pagination       
                pages={this.createPaginationItems()}         
                onPageChange={this.onPageChange}
                page={this.props.page}
                total={this.props.total} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        perPage: state.pagination.perPage,
        page: state.pagination.page,
        total: state.pagination.total,
        category: state.category,
        isRead: state.isRead
    }
}

export default connect(mapStateToProps, {requestNotifications})(PaginationContainer)

