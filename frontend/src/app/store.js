import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from 'reducers'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import history from './history'

import 'babel-polyfill'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/root'
const sagaMiddleware = createSagaMiddleware()

const loggerMiddleware = createLogger();
const middleware = routerMiddleware(history)
const initialState = {
};

const debugMiddleware = [
  apiMiddleware,
  loggerMiddleware
]
const commonMiddleware = [
  thunkMiddleware,
  reactRouterMiddleware,
  sagaMiddleware
]
let middlewares = [...debugMiddleware, ...commonMiddleware]

if (process.env.NODE_ENV == 'production') {
  middlewares = commonMiddleware
}

let store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    apiMiddleware,
    thunkMiddleware,
    loggerMiddleware,
    sagaMiddleware,
    middleware
  )
);

sagaMiddleware.run(rootSaga)

export default store;
