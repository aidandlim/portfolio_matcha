import { combineReducers } from 'redux';

import uiReducer from './ui';
import userReducer from './user';
import detailReducer from './detail';
import overviewReducer from './overview';
import matchReducer from './match';
import chatReducer from './chat';
import socketReducer from './socket';

const rootReducers = combineReducers({
    ui: uiReducer,
    user: userReducer,
    detail: detailReducer,
    overview: overviewReducer,
    match: matchReducer,
    chat: chatReducer,
    socket: socketReducer,
})

export default rootReducers;
