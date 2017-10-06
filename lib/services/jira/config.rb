module Jira
  class Config

    OPTIONS = {
      :username => Rails.application.secrets.jira_username,
      :password => Rails.application.secrets.jira_password,
      context_path: '',
      auth_type: :basic,
      :site     => 'http://rademade.atlassian.net:443/'
    }.freeze

    def self.client
      @client ||= JIRA::Client.new(OPTIONS)
    end

  end
end
