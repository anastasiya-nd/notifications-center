import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestReadingAllNotifications} from '../../../redux/actions'
import MarkAllButton from './MarkAllButton';


class MarkAllButtonContainer extends Component {
    render() {
        return <>
            <MarkAllButton readAllNotifications={this.props.requestReadingAllNotifications} />
        </>
    }
}

export default connect(null, { requestReadingAllNotifications })(MarkAllButtonContainer)

