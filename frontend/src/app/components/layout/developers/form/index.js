import React, { Component, PropTypes } from 'react'
import './style.css'
import { Route } from 'react-router'
import _ from 'lodash'

class DeveloperForm extends Component {

  constructor(props){
    super(props)
    if(_.isEmpty(this.props.departments)){
      this.props.actions.getDepartments()
    }
    this.state = {...this.props.developer}
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
    console.log('handleInputChange', this.state)
  }

  componentDidMount() {
  }

  componentDidUpdate(){
  }

  render() {
    if(_.isEmpty(this.props.departments)) { return <div>loading..</div> }
    return (
      <form>
        <fieldset>
          <div className="form-group">
            <label htmlFor="disabledTextInput">Teammate name</label>
            <input type="text"
                   name="name"
                   value={this.state.name}
                   onChange={this.handleInputChange}
                   className="form-control" placeholder="Teammate name"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleSelect1">Department</label>
            <select className="form-control"
                    name="departmentId"
                    value={this.state.department.id}
                    onChange={this.handleInputChange}
                    id="exampleSelect1">
              { this.props.departments.map((department)=> {
                return <option value={department.id} key={department.id}>{department.name}</option>
              } )}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="disabledTextInput">Toggl ID</label>
            <input type="text"
                   name="togglId"
                   value={this.state.togglId}
                   onChange={this.handleInputChange}
                   className="form-control" placeholder="Toggl ID"/>
          </div>
          <button onClick={this.submit} type="submit" className="btn btn-primary">Добавить</button>
        </fieldset>
      </form>
    )
  }

}
export default DeveloperForm