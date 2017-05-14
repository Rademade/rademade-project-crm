import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import  Index from 'containers/index'
import store from './store'
import history from './history'

const Layout = () => (
  <Provider store={store} key="provider">
      <div>
        <ConnectedRouter history={history}>
          <Route path="/" component={Index}/>
        </ConnectedRouter>
      </div>
  </Provider>
);

export default Layout
