import { combineReducers } from 'redux';

import exampleReducer from './example';


const rootReducers = combineReducers({
    example: exampleReducer
})

export default rootReducers;
