import { combineReducers } from 'redux';

import uiReducer from './ui';
import authReducer from './auth';
import matchReducer from './match';
import mapReducer from './map';
import chatReducer from './chat';

const rootReducers = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    match: matchReducer,
    map: mapReducer,
    chat: chatReducer,
})

export default rootReducers;
