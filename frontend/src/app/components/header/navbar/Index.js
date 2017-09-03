import React, { Component } from 'react'
import style from './style.css'
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'

export default class Navbar extends Component {

  constructor(){
    super()
  }

  componentDidMount() {}

  render() {
    return (
      <nav className="navbar navbar-inverse" style={style}>
        <div className="container-fluid">
          <div className="navbar-header">
            <li><Link className="navbar-brand" to="/">Rademade CRM</Link></li>
          </div>
          <ul className="nav navbar-nav">
            <li><Link className="navbar-brand" to="/dashboard">Dashboard</Link></li>
            <li><Link className="navbar-brand" to="/projects">Проекты</Link></li>
            <li><Link className="navbar-brand" to="/developers">Сотрудники</Link></li>
            <li><Link className="navbar-brand" to="/departments">Отделы</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}