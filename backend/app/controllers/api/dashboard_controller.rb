class Api::DashboardController < ApplicationController

  def index
    @projects = Project.all
    @developers = Developer.all
  end

end
