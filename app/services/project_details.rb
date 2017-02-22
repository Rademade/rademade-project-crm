class ProjectDetailsService

  def reload
    reload_forecast
  end

  def reload_forecast
    @project.sprints do |sprints|
      # TODO
    end
  end

  protected
  # @param [Project] project
  def initialize(project)
    @project = project
  end

end