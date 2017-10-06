child @projects => :projects do
  attributes :id, :name, :total_story_points

  node(:sprints_count) do |project|
    project.sprints.count
  end

  node (:velocity) do |project|
    project.sprints.closed.average(:sprint_story_point).round(2) 
  end

  node(:last_sprint_date) do |project|
    project.sprints.closed.maximum(:end_at).strftime("%d %b") 
  end

  node(:complete_sp) do |project|
    project.sprints.closed.sum(:sprint_story_point)
  end

  node(:sprint_duration) do |project|
    project.sprints.closed.average('(end_at - start_at)')
  end

end

child @developers => :developers do
  attributes :name
  
  node(:toggle_time) do |developer|
    if developer.toggl_api_key
      now = DateTime.current
      Toggle::Developer.new(developer: developer).duration(@from || now - 1.month, @to || now)
    end
  end

end
