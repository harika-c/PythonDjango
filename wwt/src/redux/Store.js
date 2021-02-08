import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import MultipleReducers from "./MultipleReducers";

const store=createStore(MultipleReducers,applyMiddleware(thunk));

export default store;