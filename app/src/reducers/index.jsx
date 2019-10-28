import { combineReducers } from 'redux';

import uiReducer from './ui';
import mapReducer from './map';

const rootReducers = combineReducers({
    ui: uiReducer,
    map: mapReducer,
})

export default rootReducers;
