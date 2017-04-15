class Api::DevelopersController < ApplicationController

  def index
    @developers = Developer.all
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
    pry binding
    params.require(:developer).permit(:id, :name, :department_id, :toggl_id)
  end

end
