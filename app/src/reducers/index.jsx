import { combineReducers } from 'redux';

import uiReducer from './ui';
import userReducer from './user';
import matchReducer from './match';
import mapReducer from './map';
import chatReducer from './chat';

const rootReducers = combineReducers({
    ui: uiReducer,
    user: userReducer,
    match: matchReducer,
    map: mapReducer,
    chat: chatReducer,
})

export default rootReducers;
