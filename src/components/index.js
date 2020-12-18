import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import favList from "../reducer/reducer"

const reducers = combineReducers({
    favorites: favList,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store
