class JiraHooksCreator 

  JIRA_SPRINT_ID   = '${sprint.id}'
  JIRA_PROJECT_KEY = '${project.key}'
  HOOKS = {
    ['jira:sprint_closed'] => {
      controller: 'api/jira_hooks/sprint_closed',
      action: :create,
      project_key: JIRA_PROJECT_KEY,
      sprint_id: JIRA_SPRINT_ID
    },
    ['jira:sprint_created'] => {
      controller: 'api/jira_hooks/sprint_created',
      action: :create,
      project_key: JIRA_PROJECT_KEY,
      sprint_id: JIRA_SPRINT_ID
    }
  }

  include Rails.application.routes.url_helpers 
  
  def call
    HOOKS.each do |events, url_data|
      Jira::Config.client.Webhook.build.save(events: events, url: url_for(url_data))
    end
  end

end
