import React, { Component, PropTypes } from 'react'
import './style.css'
import { Route } from 'react-router'
import _ from 'lodash'
import Department from 'models/department'
class DeveloperForm extends Component {

  constructor(props){
    super(props)
    if(_.isEmpty(this.props.departments)){
      Department.query()
    }
    this.state = {department:{}, ...this.props.developer}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleDepartmentChange = this.handleDepartmentChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  submit(e){
    e.preventDefault();
    this.props.submit(this.state)
  }
  
  handleDepartmentChange(event) {
    this.setState({
      department: _.find(this.props.departments, {id: event.target.value * 1})
    });
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
                    value={this.state.department.id}
                    onChange={this.handleDepartmentChange}
                    id="exampleSelect1">
              { this.props.departments.map((department)=> {
                return <option onClick={() => this.handleDepartmentChange(department)}  value={department.id} key={department.id}>{department.name}</option>
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
