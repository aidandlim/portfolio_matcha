import { useDispatch } from 'react-redux';
import { user_data, user_isComplete } from '../../../actions';

import axios from 'axios';

const Pull = () => {
    const dispatch = useDispatch();

    axios.get('/users')
    .then((res) => {
        if(res.data) {
            dispatch(user_data(res.data[0]));
            if(res.data[0].picture1 !== '' && res.data[0].first_name !== '' && res.data[0].last_name !== '' && res.data[0].address !== '') {
                dispatch(user_isComplete(true));
            } else {
                dispatch(user_isComplete(false));
            }
        }
    });
}

export default Pull;