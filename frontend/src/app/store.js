import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from 'reducers'

const loggerMiddleware = createLogger();
const initialState = {
};

let store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    apiMiddleware,
    thunkMiddleware,
    loggerMiddleware
  )
);

export default store;
