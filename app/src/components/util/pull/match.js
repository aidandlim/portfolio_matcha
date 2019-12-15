import { match_data } from '../../../actions';

import axios from 'axios';

const MatchPull = (dispatch) => {
    console.log('MatchPull');
    dispatch(match_data({id: -1}));
    axios.get('/matches')
    .then((res) => {
        setTimeout(() => {
            if(res.data.length !== 0) {
                dispatch(match_data(res.data[0]));
            } else {
                dispatch(match_data({}));
            }
        }, 1000);
    });
}

export default MatchPull;