import { chat_messages } from '../../../actions';

import axios from 'axios';

const ChatMessagesPull = (dispatch, id) => {
    console.log('ChatMessagesPull');
    const data = {
        to: id
    }
    axios.get('/messages', { params: data })
    .then((res) => {
        dispatch(chat_messages(res.data));
    });
}

export default ChatMessagesPull;