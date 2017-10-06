class Project::Sprint::CompleteSp

  def initialize(sprint)
    @sprint = sprint
  end

  def call
    complete_sp
  end

  def complete_sp
    @complete_sp ||= project_sprints.end_at(@sprint.end_at).sum(&:sprint_story_point)
  end

  def to_s
    proportion = (complete_sp / @sprint.project.total_story_points).ceil(2) * 100
    "#{proportion} %"
  end

  def project_sprints
    @sprints ||= project.sprints
  end

  def project
    @project ||= @sprint.project 
  end

end
