// src/store/reducers.js
import { combineReducers } from 'redux';
import customerReducer from '../features/customer/reducers';

const rootReducer = combineReducers({
  customer: customerReducer,
});

export default rootReducer;
