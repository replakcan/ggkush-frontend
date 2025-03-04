import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
    compose,
  } from "redux";
  import logger from "redux-logger";
  import { thunk } from "redux-thunk";
  import TweetReducer from "./reducers/tweetReducer";
  import UserReducer from "./reducers/userReducer";
  
  const rootReducer = combineReducers({
    user: UserReducer,
    tweet: TweetReducer,
  });
  
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
  );
  
  export default store;
  