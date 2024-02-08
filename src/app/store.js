// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Make sure you have reducers in place

const store = createStore(rootReducer);

export default store;
