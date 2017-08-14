require 'ruby-freshbooks'
module Freshbooks
  class Config

    OPTIONS = [ 
      Rails.application.secrets.freshbooks_account,
      Rails.application.secrets.freshbooks_token
    ].freeze

    def self.client
      @client ||= FreshBooks::Client.new(*OPTIONS)
    end

  end
end
