import React, { Component, PropTypes } from 'react'
import './style.css'
import { Route } from 'react-router'
import _ from 'lodash'
import Project from 'models/project'
import Developer from 'models/developer'
import ProjectMemberList from './project-member-list'
class ProjectForm extends Component {

  constructor(props){
    super(props)
    if(_.isEmpty(this.props.developers)){
      Developer.query()
    }
    this.state = { members: [], ...this.props.project}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleProjectChange = this.handleProjectChange.bind(this)
    this.addMember = this.addMember.bind(this)
    this.deleteMember = this.deleteMember.bind(this)   
    this.submit = this.submit.bind(this)
  }

  submit(e){
    e.preventDefault();
    console.log(this.state)
    this.props.submit(this.state)
  }
  
  handleProjectChange(event) {
    this.setState({
      project: _.find(this.props.projects, {id: event.target.value * 1})
    });
  }
 
  onMemberChange(i, member){
   let members = [...this.state.members] 
   members.splice(i, 1, member)
   this.setState({ members: members })
  }
 
  deleteMember(i){
    let { members } = this.state
    let deletedMember = members[i]
    console.log('delete members', members)
    members.splice(i, 1, { _destroy: true, ...deletedMember })
    this.setState({...this.state,  members: [...members] })
  }

  addMember(member){
    console.log('add new member')
    this.setState({ members: [...this.state.members, { departmentId: null }] })
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
    console.log('render')
    const { developers } = this.props;
    if(!developers || !this.props.project) { return <div>loading..</div> }
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
            <label htmlFor="disabledTextInput">Toggl ID</label>
            <input type="text"
                   name="togglPid"
                   value={this.state.togglPid}
                   onChange={this.handleInputChange}
                   className="form-control" placeholder="Toggl ID"/>
          </div>
          { console.log(this.state) }
          <ProjectMemberList
            members={this.state.members} onNew={this.addMember} onMemberChange={this.onMemberChange.bind(this)}  onDelete={this.deleteMember}  developers={developers}/>
          <button onClick={this.submit} type="submit" className="btn btn-primary">Добавить</button>
        </fieldset>
      </form>
    )
  }

}
export default ProjectForm
