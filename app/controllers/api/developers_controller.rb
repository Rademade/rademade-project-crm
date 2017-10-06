class Api::DevelopersController < ApplicationController

  def index
    @developers = Developer.all
  end

  def show
    @developer = Developer.find(params[:id])
  end

  def create
    @developer = Developer.create!(developer_params)
  end

  def update
    Developer.find(params[:id]).update!(developer_params)
    head :ok
  end

  def destroy
    Developer.find(params[:id]).destroy!
    head :ok
  end

  def developer_params
    params.require(:developer).permit(:id, :name, :email, :department_id, :toggl_api_key)
  end

end