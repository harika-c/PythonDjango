import { applyMiddleware, createStore } from "redux";

import MultipleReducers from "./MultipleReducers";

const store=createStore(MultipleReducers);

export default store;