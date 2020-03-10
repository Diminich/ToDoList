import {applyMiddleware,combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import todolistReducer from "./reducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
    todolist: todolistReducer,
    login: loginReducer
});

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;
