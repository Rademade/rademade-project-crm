class Api::JiraHooks::SprintClosedController < ApplicationController

  # project_key
  # sprint_id
  
  def create
    project = Project.find_by!(jira_key: params[:project_key])
    Jira::Sync::Sprint.new(project: project, jira_key: params[:sprint_id).call
    head :ok
  end

end
