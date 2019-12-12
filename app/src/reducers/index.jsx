import { combineReducers } from 'redux';

import uiReducer from './ui';
import userReducer from './user';
import chatReducer from './chat';

const rootReducers = combineReducers({
    ui: uiReducer,
    user: userReducer,
    chat: chatReducer,
})

export default rootReducers;
