object @sprint

attributes :id, :name, :sprint_story_point, :project_id

node(:start_at) do |sprint|
  sprint.start_at&.strftime("%d/%m/%Y")
end

node(:end_at) do |sprint|
  sprint.end_at
end

complete_sp = Project::Sprint::CompleteSp.new(root_object)

node(:complete_story_points) do |_sprint|
  complete_sp.call
end

node(:complete_story_points) do |_sprint|
  complete_sp.to_s
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
    member_detail.department.name
  end

  node(:planned_time) do |member_detail|
    TimeFormatter.sec_to_h_m(member_detail.member.hours * 3600)
  end

  node(:percent) do |member_detail|
    ((member_detail.member.hours * 3600) / member_detail.time.to_f * 100).to_i
  end

end
