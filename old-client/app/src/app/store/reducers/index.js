import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import hello from './hello';

const reducers = combineReducers({
  hello
});

const composeEnhancers =
  /* eslint-disable no-underscore-dangle */
  /* eslint-disable no-undef */
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk, logger), composeEnhancers)
);
export default store;
