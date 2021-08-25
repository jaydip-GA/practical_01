import Reducer from "./Reducer";
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    data: Reducer
})

export default RootReducer;