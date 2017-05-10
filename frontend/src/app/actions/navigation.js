import {push} from 'react-router-redux'

export default {
  toDepartments: () => (dispatch) => dispatch(push('/departments'))
}
