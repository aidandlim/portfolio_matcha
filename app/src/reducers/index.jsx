import { combineReducers } from 'redux';

import uiReducer from './ui';
import signReducer from './sign';
import userReducer from './user';
import mapReducer from './map';

const rootReducers = combineReducers({
    ui: uiReducer,
    sign: signReducer,
    user: userReducer,
    map: mapReducer,
})

export default rootReducers;
