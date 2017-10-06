class Freshbook::InvoiceFactory
  
  def initialize(client_id)
    @client_id = client_id
  end

  def call
    client.invoices.create(client_id: @client_id)
  end

  def client
    @client ||= Freshbook::Config.client
  end

end
