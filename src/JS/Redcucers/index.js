import {combineReducers} from 'redux'; 
import  listReducer  from "./todoLists";

const rootReducer = combineReducers ({ listReducer });

export default rootReducer;