import React, { Component } from 'react'
import MemberListItem       from './member-list-item'
import _                    from 'lodash'
class ProjectMemberList extends Component {

  constructor(props){
    super(props)
    this.addNewMember = this.addNewMember.bind(this)   
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
  }

  render() {
      console.log('render list')
      let members = _.reject(this.props.members, (member) => member._destroy)

      return (
        <div>
          <span>Project Team</span>
         { members.map((member, i) =>
            <MemberListItem
              member={member}
              id={i}
              key={i}
              onChange={(member) => this.props.onMemberChange(i, member)}
              onDelete={ () => this.onDelete(i) }
              developers={this.props.developers}/> 
              )
          }
         
          <button onClick={this.addNewMember} type="submit" className="btn btn-primary">Add Teammate</button>
        </div>
      )
  }

}
export default ProjectMemberList
