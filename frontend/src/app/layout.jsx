import React from 'react'
import {browserHistory, Router} from 'react-router'
import {Provider} from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {green500} from 'material-ui/styles/colors'
import Header from 'components/Header'
import routes from 'routes/index'
import store from './store'


const muiTheme = getMuiTheme({
  appBar: {
    height: 54,
    color: green500
  },
})

const Layout = () => (
  <Provider store={store} key="provider">
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Header/>
        <Router history={browserHistory} routes={routes}/>
      </div>
    </MuiThemeProvider>
  </Provider>
)

export default Layout
