import { createStore, combineReducers } from 'redux';
import mapReducer from './mapReducer';
import characterReducer from './characterReducer';
import oldOnesReducer from './oldOnesReducer';
import mythosReducer from './mythosReducer';

const combinedReducer = combineReducers({
  mapReducer,
  characterReducer,
  oldOnesReducer,
  mythosReducer,
});
const store = createStore(combinedReducer);
export default store;
