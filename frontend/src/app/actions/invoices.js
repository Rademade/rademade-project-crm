export default {
  getInvoicePdf: (sprintId) => {
    return {
      type: 'GET_INVOICES_REQUEST',
      query: sprintId
    }
  }

}
