class Api::ProjectsController < ApplicationController
  
  before_filter :get_jira_client
 
  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
    # sync with Jira
    # ::Jira::Sync::Project.new(@project).call
  end

  def create
    @project = Project.create!(project_params)
  end

  def update
    @project = Project.find(params[:id])
    @project.update!(project_params)
  end

  def destroy
    Project.find(params[:id]).destroy!
    head :ok
  end

  def project_params
    # http://edgeapi.rubyonrails.org/classes/ActionController/StrongParameters.html
    # ~/.rvm/gems/ruby-2.4.0/gems/actionpack-5.0.1/lib/action_controller/metal/params_wrapper.rb
    # def include self.include = m.attribute_names
    # https://github.com/rails/rails/pull/19254
    # https://github.com/rails/rails/issues/17216
    # param.require(:project).permit(:id, :name, :toggl_id, project_members_attributes: [:hours, :rate])
    params.permit(:id, :name, :toggl_pid, :jira_key, project_members_attributes: [:id, :developer_id, :_destroy, :hours, :rate])
  end

end
