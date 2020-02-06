import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


window.store = store;
export default store;
