class JiraHooksCreator 

  include Rails.application.routes.url_helpers 
 
  HOOKS = {
    ['jira:sprint_closed']  => :api_jira_hooks_sprint_closed_index_url,
    ['jira:sprint_created'] => :api_jira_hooks_sprint_created_index_url
  }

  def call
    HOOKS.each do |events, url|
      Jira::Config.client.Webhook.build.save(events: events, url: send(url))
    end
  end

end
