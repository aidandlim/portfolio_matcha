import { combineReducers } from 'redux';

import uiReducer from './ui';
import userReducer from './user';
import mapReducer from './map';

const rootReducers = combineReducers({
    ui: uiReducer,
    user: userReducer,
    map: mapReducer,
})

export default rootReducers;
