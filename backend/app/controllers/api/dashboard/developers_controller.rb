class Api::Dashboard::DevelopersController < ApplicationController

  def index
    @developers = Developer.all
    now = DateTime.now
    @from = params[:from] ? Date.parse(params[:from]) : now - 1.month
    @to = params[:to] ? Date.parse(params[:to]) : now
  end

end
