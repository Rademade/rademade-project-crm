import React, { Component, PropTypes } from 'react'
import './style.css'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

class ProjectMemberList extends Component {
  
  constructor(props){
    super(props)
    this.state = {developerId: null, ...this.props.member}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.submit = this.submit.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  submit(e){
    e.preventDefault();
    this.props.submit(this.state)
  }

  componentDidMount() {
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  onDelete(e){
    e.preventDefault()
    this.props.onDelete()
  }

  render() {
    const { project, developers } = this.props;
    return (
      <div>
        {
        //selector with all developers
        // input hours/sprint
        // 20 $ per hours
        // remove button
        }
        <form className="form-inline">
          
          <select className="form-control"
                  name="developerId"
                  value={this.state.developerId}
                  onChange={this.handleInputChange}>
            { this.props.developers.map((developer)=> {
              return <option value={developer.id} key={developer.id}>{developer.name}</option>
            } )}
          </select>

          <div className="form-group">
            <input type="text" placeholder="h/sprint" className="form-control" id="hours"/>
          </div>
          
          <div className="form-group">
              <input type="text" placeholder="per hour" className="form-control" id="perhour"/>
          </div>
          
          <button type="submit" onClick={this.onDelete} className="btn btn-default">remove</button>
       
       </form>
      </div>
    )
  }

}
ProjectMemberList.propTypes = {
  developers: PropTypes.array,
  member: PropTypes.object
};
export default ProjectMemberList
