import React, { Component, PropTypes } from 'react'
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
    console.log(this.state)
    this.props.onChange(this.state)
  }

  onDelete(e){
    e.preventDefault()
    this.props.onDelete()
  }

  render() {
    console.log(this.state)
    const { project, developers } = this.props;
    return (
      <div>
        <fieldset className="form-inline">
          <select className="form-control"
                  name="developerId"
                  value={this.state.developerId}
                  onChange={this.handleInputChange}>
            { this.props.developers.map((developer)=> {
              return <option value={developer.id} key={developer.id}>{developer.name}</option>
            } )}
          </select>

          <div className="form-group">
            <input className="form-control"
              type="text"
              name="hours"
              value={this.state.hours}
              onChange={this.handleInputChange}
              placeholder="h/sprint"
              id="hours"/>
          </div>
          
          <div className="form-group">
            <input type="text" name="rate"
              value={this.state.rate}
              onChange={this.handleInputChange}
              placeholder="per hour" className="form-control" id="rate"/>
          </div>
          
          <button type="submit" onClick={this.onDelete} className="btn btn-default">remove</button>
        </fieldset> 
      </div>
    )
  }

}
ProjectMemberList.propTypes = {
  developers: PropTypes.array,
  member: PropTypes.object,
  onChange: PropTypes.function
};
export default ProjectMemberList
