import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux"
import logger from "redux-logger"
import { thunk } from "redux-thunk"
import TweetReducer from "./reducers/tweetReducer";
import UserReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
    user: UserReducer,
    tweet: TweetReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;