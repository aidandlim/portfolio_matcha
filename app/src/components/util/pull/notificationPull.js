import { notification_list } from '../../../actions';

import axios from 'axios';

const NotificationPull = (dispatch) => {
    axios.get('/notifications')
    .then((res) => {
        console.log(res.data);
        dispatch(notification_list(res.data));
    });
}

export default NotificationPull;