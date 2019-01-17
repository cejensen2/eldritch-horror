import { createStore, combineReducers } from 'redux';
import reducer from './reducer';

const combinedReducer = combineReducers({ reducer });
const store = createStore(combinedReducer);
export default store;
