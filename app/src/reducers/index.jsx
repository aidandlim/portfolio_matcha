import { combineReducers } from 'redux';

import uiReducer from './ui';
import userReducer from './user';
import chatbotReducer from './chatbot';
import mapReducer from './map';

const rootReducers = combineReducers({
    ui: uiReducer,
    user: userReducer,
    chatbot: chatbotReducer,
    map: mapReducer,
})

export default rootReducers;
