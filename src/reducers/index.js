import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

const { default: apiReducer } = require('./apiReducer');

const rootReducer = combineReducers({ api: apiReducer });

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
