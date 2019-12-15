import { chat_list } from '../../../actions';

import axios from 'axios';

const ChatListPull = (dispatch) => {
    console.log('ChatListPull');
    const data = {
        type: 'chat'
    }
    axios.get('/likes', { params: data})
    .then((res) => {
        dispatch(chat_list(res.data));
    });
}

export default ChatListPull;