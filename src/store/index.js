import { createStore, combineReducers } from 'redux';
import categoryReducer from './categories.js';
import productReducer from './items.js';
import cartReducer from './cart.js';

let reducers = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer
});

const store = () => {
  return createStore(reducers);
}

export default store;
