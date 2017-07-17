collection @sprints

attributes :id, :name, :start_at, :end_at, :sprint_story_point, :complete_sp

node(:complete_story_points) do |sprint|
  # sprint.project
end

node(:total_story_points) do |sprint|
  sprint.project.story_points
end

node(:toggl_time) do |sprint|
  # sprint.project.story_points
end