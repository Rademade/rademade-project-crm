class Api::JiraSynchronize::ProjectsController < ApplicationController

  def create
    @project = Project.find(params[:project_id])
    ::Jira::Sync::Project.new(@project).update_all_sprints
  end

  def update
    @project = Project.find(params[:id])
    ::Jira::Sync::Project.new(@project).call
  end

end
