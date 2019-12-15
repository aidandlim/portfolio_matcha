import { detail_data, detail_tag1, detail_tag2 } from '../../../actions';

import axios from 'axios';

const DetailPull = (dispatch, id) => {
    console.log('DetailPull');
    if(id !== -1) {
        const data = {
            userId: id,
        }
        
        axios.get('/users', { params : data })
        .then((res) => {
            dispatch(detail_data(res.data[0]));
        });

        axios.get('/tags', { params : { type: 'other', userId: id} })
        .then((res) => {
            dispatch(detail_tag1(res.data.user));
            dispatch(detail_tag2(res.data.other));
        });
    } else {
        dispatch(detail_data({}));
    }
}

export default DetailPull;