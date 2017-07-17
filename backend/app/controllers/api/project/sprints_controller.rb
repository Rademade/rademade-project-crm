class Api::Project::SprintsController < ApplicationController

  def index
    @sprints = Project.find(params[:project_id]).sprints
  end

end
