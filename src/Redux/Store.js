import { createStore, applyMiddleware } from 'redux';
import RootReducer from './RootReducer';
import reduxthunk from 'redux-thunk';
const reduxThunk = reduxthunk;

const Store = createStore(RootReducer, applyMiddleware(reduxThunk))


export default Store;