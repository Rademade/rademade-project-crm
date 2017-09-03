import {
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILURE,
 
  GET_PROJECT_REQUEST,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAILURE,

  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILURE,
 
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILURE,
  
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE
} from 'constants/action_types/projects'
import Abstract from './abstract'

export default class Project extends Abstract {

  static URL = `${Abstract.API}/projects`

  static ACTION_TYPES = {
    QUERY_REQUEST:  GET_PROJECTS_REQUEST,
    QUERY_SUCCESS:  GET_PROJECTS_SUCCESS,
    QUERY_FAILURE:  GET_PROJECTS_FAILURE,

    GET_REQUEST: GET_PROJECT_REQUEST,
    GET_SUCCESS: GET_PROJECT_SUCCESS,
    GET_FAILURE: GET_PROJECT_FAILURE,
    
    CREATE_REQUEST: CREATE_PROJECT_REQUEST,
    CREATE_SUCCESS: CREATE_PROJECT_SUCCESS,
    CREATE_FAILURE: CREATE_PROJECT_FAILURE,
    
    UPDATE_REQUEST: UPDATE_PROJECT_REQUEST,
    UPDATE_SUCCESS: UPDATE_PROJECT_SUCCESS,
    UPDATE_FAILURE: UPDATE_PROJECT_FAILURE,
   
    DELETE_REQUEST: DELETE_PROJECT_REQUEST,
    DELETE_SUCCESS: DELETE_PROJECT_SUCCESS,
    DELETE_FAILURE: DELETE_PROJECT_FAILURE
  }
  remove() {
    this._destroy = true 
  }
  serialize() {
    this.project_members_attributes = this.members
    return this 
  }
}
