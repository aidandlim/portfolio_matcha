import { combineReducers } from 'redux';

import uiReducer from './ui';
import authReducer from './auth';
import mapReducer from './map';

const rootReducers = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    map: mapReducer,
})

export default rootReducers;
