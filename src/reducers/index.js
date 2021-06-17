import { combineReducers } from 'redux';
import jokesReducer from './jokesReducer';

const rootReducer = combineReducers({ jokesReducer });

export default rootReducer;