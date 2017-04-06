import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import  Index from 'components/index/container'
import store from './store'
const Layout = () => (
  <Provider store={store} key="provider">
      <div>
        <BrowserRouter>
          <Route path="/" component={Index}/>
        </BrowserRouter>
      </div>
  </Provider>
);

export default Layout
