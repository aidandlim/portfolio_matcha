import { useDispatch } from 'react-redux';
import { user_data } from '../../../actions';

import axios from 'axios';

const Pull = () => {
    const dispatch = useDispatch();

    axios.get('/users')
    .then((res) => {
        if(res.data) {
            dispatch(user_data(res.data[0]));
        }
    });
}

export default Pull;