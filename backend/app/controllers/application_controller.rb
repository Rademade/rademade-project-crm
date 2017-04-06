require 'import'
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  include JiraIntegration

  protect_from_forgery with: :exception
  
  def show
		action_service.new(self).show
  end
  
  def index
		action_service.new(self).index
  end
  
	def action_service
    "Actions::#{controller_name.capitalize}::#{action_name.capitalize}".constantize
	end
end
