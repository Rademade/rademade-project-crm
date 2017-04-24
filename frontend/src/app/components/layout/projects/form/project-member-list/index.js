import React, { Component } from 'react'
import MemberListItem       from './member-list-item'
class ProjectMemberList extends Component {

  constructor(props){
    super(props)
    this.addNewMember = this.addNewMember.bind(this)   
    this.state = {
      members: this.props.members
    }
  }
 
  addNewMember(e){
    e.preventDefault()
    this.props.onNew()
    console.log('addNewMember')
  }
  
  onDelete(i){
    console.log('remove member', i)
    this.props.onDelete(i)
  } 
  
  componentDidMount() {
  }

  componentDidUpdate(){
    this.state = {
      members: this.props.members
    }
  }

  render() {
      console.log('render list')
      return (
        <div>
          <span>Project Team</span>
          { this.state.members.map((member, i) => <MemberListItem member={member} id={i} onDelete={ () => this.onDelete(i) }  developers={this.props.developers}/> ) }
         
          <button onClick={this.addNewMember} type="submit" className="btn btn-primary">Add Teammate</button>
        </div>
      )
  }

}
export default ProjectMemberList
