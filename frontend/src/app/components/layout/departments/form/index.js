import React, { Component, PropTypes } from 'react'
import './style.css'
import { Route } from 'react-router'

class DepartmentForm extends Component {

  constructor(props){
    super(props)
    this.state = {...this.props.department}
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this)
  }

  submit(e){
    e.preventDefault();
    this.props.submit(this.state)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
  }

  componentDidUpdate(){
  }

  render() {
    return (
      <form>
        <fieldset>
          <div className="form-group">
            <label htmlFor="disabledTextInput">Department name</label>
            <input type="text"
                   name="name"
                   value={this.state.name}
                   onChange={this.handleInputChange}
                   className="form-control" placeholder="Department name"/>
          </div>
          <button onClick={this.submit} type="submit" className="btn btn-primary">Добавить</button>
        </fieldset>
      </form>
    )
  }

}
export default DepartmentForm