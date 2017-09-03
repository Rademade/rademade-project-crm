require 'freshbooks'
module Freshbook
  class Config

    OPTIONS = { 
      api_url: Rails.application.secrets.freshbooks_account,
      token: Rails.application.secrets.freshbooks_token
    }.freeze

    def self.client
      @client ||= Freshbooks::Client.new(OPTIONS)
    end

  end
end
