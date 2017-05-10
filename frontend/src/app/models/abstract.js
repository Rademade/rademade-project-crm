import axios from 'axios'
import store from 'store'
import _ from 'lodash'
import { API } from 'constants/API'
import changeCaseKeys from 'change-case-keys'
class Abstract {
  
  static API = API

  static ACTION_TYPES = {
    QUERY_SUCCESS: '',
    QUERY_REQUEST: '',
    QUERY_FAILURE: '',
    
    CREATE_SUCCESS: '',
    CREATE_REQUEST: '',
    CREATE_FAILURE: '',

    UPDATE_SUCCESS: '',
    UPDATE_REQUEST: '',
    UPDATE_FAILURE: '',

    DELETE_SUCCESS: '',
    DELETE_REQUEST: '',
    DELETE_FAILURE: ''
  }

  constructor(data){
    Object.assign(this, data)
  }

  static query() {
    store.dispatch({type: this.ACTION_TYPES.QUERY_REQUEST });
    axios({
      method: 'get',
      url: this.URL,
      transformResponse: [(data) => {
        let items = JSON.parse(data)
        if(_.isArray(items)){
          items = JSON.parse(data).map((item) => {
            return new this(item)
          })
        } else {
          return new this(items) 
        }
        return items; }],
    }).then((response) => {
        console.log('query')
        store.dispatch({type: this.ACTION_TYPES.QUERY_SUCCESS, items: changeCaseKeys(response.data, 'camelize') })
      })
      .catch( (error) => {
         store.dispatch({type: this.ACTION_TYPES.QUERY_FAILURE, error: error})
      });
  }

  save() {
    if(this.id) {
      this.update()
    } else {
      this.create()
    }
  }

  update() {
    store.dispatch({type: this.constructor.ACTION_TYPES.UPDATE_REQUEST});
    axios({
      method: 'put',
      url: `${this.constructor.URL}/${this.id}`,
      data: this.serialize().underscored(),
    }).then(({ data }) => {
        store.dispatch({type: this.constructor.ACTION_TYPES.UPDATE_SUCCESS, item: new this.constructor(data).camelize() })
      })
      .catch((error) => {
        store.dispatch({type: this.constructor.ACTION_TYPES.UPDATE_FAILURE, error: error})
      });
  }

  create() {
    store.dispatch({type: this.constructor.ACTION_TYPES.CREATE_REQUEST});
    axios({
      method: 'post',
      url: this.constructor.URL,
      data: this.serialize().underscored(),
    }).then((response) => {
        store.dispatch({type: this.constructor.ACTION_TYPES.CREATE_SUCCESS, item: this.camelize() })
      })
      .catch((error) => {
        store.dispatch({type: this.constructor.ACTION_TYPES.CREATE_FAILURE, error: error})
      });
  }

  delete() {
    store.dispatch({type: this.constructor.ACTION_TYPES.DELETE_REQUEST});
    axios({
      method: 'delete',
      url: `${this.constructor.URL}/${this.id}`,
    }).then((response) => {
        store.dispatch({type: this.constructor.ACTION_TYPES.DELETE_SUCCESS, id: this.id})
      })
      .catch((error) => {
        store.dispatch({type: this.constructor.ACTION_TYPES.UPDATE_FAILURE, error: error})
      });
  }
  camelize(){
    changeCaseKeys(this, 'camelize')
    return this
  }
  underscored() {
    changeCaseKeys(this, 'underscored')
    return this
  }
  
  remove() {
    this._destroy = true 
  }
}

export default  Abstract
