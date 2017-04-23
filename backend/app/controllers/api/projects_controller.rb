class Api::ProjectsController < ApplicationController
 
  def index
    @projects = Project.all
  end

  def create
    @project = project.create!(developer_params)
  end

  def update
    project.find(params[:id]).update!(project_params)
    head :ok
  end

  def destroy
    project.find(params[:id]).destroy!
    head :ok
  end

  def project_params
    params.require(:project).permit(:id, :name, :toggl_id)
  end

end
