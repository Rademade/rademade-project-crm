class Api::SprintInvoicesController < ApplicationController

  # sprint_id
  def show
    respond_to do |format|
      format.pdf do
        # TODO
        pdf = ::Freshbook::Config.client.invoices.get_pdf(invoice_id: '00000019694')
        send_data(pdf, filename: 'your_filename.pdf', type: 'application/pdf')
      end
    end
  end

end
