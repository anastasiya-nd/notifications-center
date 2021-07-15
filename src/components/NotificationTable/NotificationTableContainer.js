import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestNotifications, requestReadingNotification} from '../../redux/actions'
import NotificationTable from '../NotificationTable/NotificationTable';


class NotificationTableContainer extends Component {
    componentDidMount() {
        this.props.requestNotifications(this.props.perPage, this.props.page)
        // this.props.getNotificationsThunkCreator(this.props.perPage, this.props.page);   
    }

    // onPageChange = (page) => {
    //     this.props.requestNotifications(this.props.perPage, page, this.props.category, this.props.isRead)
    //     // this.props.getNotificationsThunkCreator(this.props.perPage, page, this.props.category, this.props.isRead)
    // }

    render() {
        return <>
            <NotificationTable
                notificationsData={this.props.notificationsData} 
                readNotification={this.props.requestReadingNotification} />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        notificationsData: state.notificationsData,
        perPage: state.pagination.perPage,
        page: state.pagination.page,
    }
}

export default connect(mapStateToProps, { requestNotifications, requestReadingNotification })(NotificationTableContainer)

// let mapDispatchToProps = dispatch => {
//     return {
//         fetch: (perPage, page, category, isRead) => {
//             dispatch(fetch(perPage, page, category, isRead));
//             console.log('mapDispatchToProps ' + perPage, page, category, isRead)
//         },
//     };
//   };
