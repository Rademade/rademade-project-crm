class Api::Project::SprintsController < ApplicationController

  def index
    @sprints = ::Project.find(params[:project_id]).sprints
  end

  def show
    @sprint = ::Project::Sprint.find(params[:id])
  end

  def update
    @sprint = ::Project::Sprint.find(params[:id])
    # Syncronize Jira sprint 
    Jira::Sync::Sprint.new(project: @sprint.project, jira_key: @sprint.jira_key).call
  end

end
