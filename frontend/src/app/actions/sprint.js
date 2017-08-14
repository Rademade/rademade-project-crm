import navigation from 'actions/navigation'
import Sprint from 'models/sprint'
import Invoice from 'api/invoices'

export default {
  loadSprints: (projectId) => (dispatch) => {
    Sprint.query({ project_id: projectId })
  },
  getSprint: (sprintId) => (dispatch) => {
    Sprint.get(sprintId)
  },
  getInvoicePdf: (sprintId) => (dispatch) => {
    Invoice.get(sprintId)
  }
}

