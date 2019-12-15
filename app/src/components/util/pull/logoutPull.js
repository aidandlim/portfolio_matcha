import { user_data, ui_notification, chat_current, detail_data, match_data, chat_list, user_tag1, user_tag2, user_suggest1, user_suggest2 } from '../../../actions';

import axios from 'axios';

const LogoutPull = (dispatch) => {
    axios.get('/auth/out')
    .then((res) => {
        if(res.data) {
            dispatch(user_data({}));
            dispatch(ui_notification(false));
            dispatch(chat_current(-1));
            dispatch(detail_data({}));
            dispatch(match_data({}));
            dispatch(chat_list([]));
            dispatch(user_tag1([]));
            dispatch(user_tag2([]));
            dispatch(user_suggest1([]));
            dispatch(user_suggest2([]));
        }
    });
}

export default LogoutPull;