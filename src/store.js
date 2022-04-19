import {combineReducers } from 'redux';
import { createStore,applyMiddleware} from 'redux';
import {getAllPizzasReducer} from './reducers/pizzaReducers'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import { cartReducer } from './reducers/cartReducer';
const finalReducer=combineReducers({
getAllPizzasReducer : getAllPizzasReducer,
cartReducer:cartReducer

})
//if we have any item by name cartItems in local Storage, we convert it into json object and assign to store
const cartItems=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]
//creating initial state for cartReducer
const initialState={
cartReducer:{
cartItems:cartItems
}
}
const composeEnhancers= composeWithDevTools({})
const store =createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

export default store;