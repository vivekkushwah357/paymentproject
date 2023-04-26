import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './CartReducer';

const store = createStore(cartReducer);

export default store;
