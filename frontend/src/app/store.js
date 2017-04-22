import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from 'reducers'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import history from './history'

const loggerMiddleware = createLogger();
const middleware = routerMiddleware(history)
const initialState = {
};

let store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    apiMiddleware,
    thunkMiddleware,
    loggerMiddleware,
    middleware
  )
);

export default store;
