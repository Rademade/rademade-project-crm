import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {rootReducer} from 'reducers'

const loggerMiddleware = createLogger()
const initialState = {
  projects: []
}

let store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

export default store;
