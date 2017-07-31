collection @sprints

attributes :id, :name, :sprint_story_point, :complete_sp

node(:start_at) do |sprint|
  sprint.start_at&.strftime("%d/%m/%Y")
end

node(:end_at) do |sprint|
  sprint.end_at
end

node(:complete_story_points) do |sprint|
  # sprint.project
end

node(:total_story_points) do |sprint|
  sprint.project.total_story_points
end

node(:toggl_time) do |sprint|
  # sprint.project.total_story_points
end