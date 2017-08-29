class Api::DepartmentsController < ApplicationController

  def index
    @departments = Department.all
  end

  def show
    @department = Department.find(params[:id])
  end

  def create
    @department = Department.create!(department_params)
  end

  def update
    Department.find(params[:id]).update!(department_params)
    head :ok
  end

  def destroy
    Department.find(params[:id]).destroy!
    head :ok
  end

  def department_params
    params.require(:department).permit(:name)
  end

end
