class Api::Project::SprintsController < ApplicationController

  def index
    @sprints = ::Project.find(params[:project_id]).sprints
  end

  def show
    @sprint = ::Project::Sprint.find(params[:id])
  end

end
