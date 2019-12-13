import { detail_data } from '../../../actions';

import axios from 'axios';

const DetailPull = (dispatch, id) => {
    if(id !== -1) {
        const data = {
            userId: id,
        }

        console.log(data);
        
        axios.get('/users', { params : data })
        .then((res) => {
            dispatch(detail_data(res.data[0]));
        });
    } else {
        dispatch(detail_data({}));
    }
}

export default DetailPull;