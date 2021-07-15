import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestNotifications } from '../../redux/actions'
import NotificationFilter from './NotificationFilter';

class NotificationFilterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRead: this.props.isRead,
            category: this.props.category
        }
    }

    getFilterValue = (event) => {
        if (event.target.type === 'radio') {
            let name = event.target.name;
            let value = event.target.value;
            this.setState({[name]: value});
        }
    }

    getNotificationsWithFilter = () => {
        this.props.requestNotifications(this.props.perPage, 1, this.state.category, this.state.isRead)
        // this.props.getNotificationsThunkCreator(this.props.perPage, 1, this.state.category, this.state.isRead)
    }

    resetFilter = () => {
        this.setState({
            isRead: undefined,
            category: undefined
        });
        let elems = document.querySelectorAll('input');
        elems.forEach(i => i.checked = false)
        this.props.requestNotifications(this.props.perPage, 1)
        // this.props.getNotificationsThunkCreator(this.props.perPage, 1)
    }

    render() {
        return <>
            <NotificationFilter
                getFilterValue={this.getFilterValue}
                getNotificationsWithFilter={this.getNotificationsWithFilter}
                resetFilter={this.resetFilter} />   
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        notificationsData: state.notificationsData,
        perPage: state.pagination.perPage,
        page: state.pagination.page,
        category: state.category,
        isRead: state.isRead
    }
}

export default connect(mapStateToProps, { requestNotifications })(NotificationFilterContainer)