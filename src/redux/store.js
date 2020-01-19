import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

if ( process.env.NODE_ENV === 'development' ) {
    middlewares.push(logger);
}

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middlewares)
));

export default store;
