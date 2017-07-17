import navigation from 'actions/navigation'
import Sprint from 'models/sprint'

export default {
  loadSprints: (projectId) => (dispatch) => {
    Sprint.query({ project_id: projectId })
  }
}

