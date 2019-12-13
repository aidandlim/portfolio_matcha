import { user_tag1, user_tag2 } from '../../../actions';

import axios from 'axios';

const TagPull = (dispatch) => {
    const data1 = {
        type: 'myself'
    }

    axios.get('/tags', { params : data1 })
    .then((res) => {
        dispatch(user_tag1(res.data));
    });

    const data2 = {
        type: 'preference'
    }

    axios.get('/tags', { params : data2 })
    .then((res) => {
        dispatch(user_tag2(res.data));
    });
}

export default TagPull;