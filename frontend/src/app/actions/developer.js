import navigation from 'actions/navigation'
import Developer from 'models/developer'

export default {
  saveDeveloper: (developer) => (dispatch) => {
    new Developer(developer).save()
    navigation.toDevelopers()(dispatch)
  }
}

