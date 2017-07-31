object @sprint

attributes :id, :name, :sprint_story_point, :complete_sp, :project_id

node(:start_at) do |sprint|
  sprint.start_at&.strftime("%d/%m/%Y")
end

node(:end_at) do |sprint|
  sprint.end_at
end

node(:complete_story_points) do |sprint|
  proportion = (sprint.complete_sp / sprint.project.total_story_points).ceil(2) * 100
  "#{proportion} %"
end

node(:total_story_points) do |sprint|
  sprint.project.total_story_points
end

node(:toggle_time) do |sprint|
  Time.at(sprint.toggle_time).utc.strftime("%H:%M:%S")
end