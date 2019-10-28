import { combineReducers } from 'redux';

import uiReducer from './ui';


const rootReducers = combineReducers({
    ui: uiReducer
})

export default rootReducers;
