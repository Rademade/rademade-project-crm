import React, { Component, PropTypes } from 'react'
import './style.css'
import { Route } from 'react-router'
import _ from 'lodash'
import Project from 'models/project'
import Developer from 'models/developer'
class ProjectForm extends Component {

  constructor(props){
    super(props)
    if(_.isEmpty(this.props.developers)){
      Developer.query()
    }
    this.state = {project:{}, ...this.props.project}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleProjectChange = this.handleProjectChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  submit(e){
    e.preventDefault();
    this.props.submit(this.state)
  }
  
  handleProjectChange(event) {
    this.setState({
      project: _.find(this.props.projects, {id: event.target.value * 1})
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
    if(!this.props.developers) { return <div>loading..</div> }
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
            <label htmlFor="exampleSelect1">Project</label>
            <select className="form-control"
                    value={this.state.project.id}
                    onChange={this.handleProjectChange}
                    id="exampleSelect1">
              { this.props.developers.map((developer)=> {
                return <option onClick={() => this.handleProjectChange(developer)}  value={developer.id} key={developer.id}>{developer.name}</option>
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
export default ProjectForm
