import { combineReducers } from 'redux';

import authReducer from './auth';
import mapReducer from './map';

const rootReducers = combineReducers({
    auth: authReducer,
    map: mapReducer,
})

export default rootReducers;
