class Api::JiraSynchronize::ProjectsController < ApplicationController

  def update
    @project = Project.find(params[:id])
    ::Jira::Sync::Project.new(@project).call
  end

end
