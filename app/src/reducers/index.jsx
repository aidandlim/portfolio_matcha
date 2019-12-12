import { combineReducers } from 'redux';

import uiReducer from './ui';
import userReducer from './user';
import detailReducer from './detail';
import chatReducer from './chat';

const rootReducers = combineReducers({
    ui: uiReducer,
    user: userReducer,
    detail: detailReducer,
    chat: chatReducer,
})

export default rootReducers;
