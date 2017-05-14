import navigation from 'actions/navigation'
import Department from 'models/department'

export default {
  saveDepartment: (department) => (dispatch) => {
    new Department(department).save()
    navigation.toDepartments()(dispatch)
  }
}

