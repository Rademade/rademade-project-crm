import React, { Component, PropTypes } from 'react'
import Header from 'components/header'
import Layout from 'components/layout'
import './style.css'
import { Route } from 'react-router'

class Index extends Component {

  constructor(){
    super()
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Header/>
        <Layout/>
      </div>
    )
  }

}
export default Index