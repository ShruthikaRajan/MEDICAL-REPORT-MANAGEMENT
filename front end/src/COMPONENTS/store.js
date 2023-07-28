import { createStore, combineReducers } from 'redux';
import Reducer from './Reducer';
const store = createStore(Reducer);

export default store