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
  Toggle::Sprint.new(sprint).inspect
end

child member_details: :developers do
  
  node(:toggle_time) do |member_detail|
    Toggle::MemberDetail.new(member_detail).inspect
  end

  node(:name) do |member_detail|
    member_detail.member.developer.name
  end

  node(:department) do |member_detail|
    member_detail.member.developer.department.name
  end

  node(:planned_time) do |member_detail|
    '?'
  end

  node(:percent) do |member_detail|
    '?'
  end
end
