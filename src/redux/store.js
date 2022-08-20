import { combineReducers, createStore , applyMiddleware } from "redux";
import boxReducer from "./addBox/addBoxReducer";
import contactReducer from "./contacts/contactsReducer";

const store = createStore(combineReducers({contacts : contactReducer , box : boxReducer})) ;

export default store