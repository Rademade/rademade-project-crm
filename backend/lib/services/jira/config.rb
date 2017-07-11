module Jira
  class Config

    OPTIONS = {
      :username => 'andrey@rademade.com',
      :password => '1abramow1',
      context_path: '',
      auth_type: :basic,
      :site     => 'http://rademade.atlassian.net:443/'
    }.freeze

    def self.client
      @client ||= JIRA::Client.new(OPTIONS)
    end

  end
end