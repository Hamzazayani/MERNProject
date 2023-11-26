import { combineReducers } from "redux";
import { productReducer } from './ProductReducer';
import {userReducer} from './UserReducer';
import basketReducer from './BasketReducer';
export const rootReducer = combineReducers({ productReducer , userReducer , basketReducer})



