
module JiraIntegration

  def self.included(base)
    base.instance_eval do
      rescue_from JIRA::OauthClient::UninitializedAccessTokenError do
        redirect_to new_jira_session_url
      end
    end
  end

  private

  def get_jira_client
    # add any extra configuration options for your instance of JIRA,
    # e.g. :use_ssl, :ssl_verify_mode, :context_path, :site
   options = {
     :username => 'andrey@rademade.com',
     :password => '1abramow1',
     context_path: '',
     auth_type: :basic,
     :site     => 'http://rademade.atlassian.net:443/'
   }
    @jira_client = JIRA::Client.new(options)
  end
end
