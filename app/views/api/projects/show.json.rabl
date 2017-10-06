object @project
attributes :id, :name, :toggl_pid, :jira_key, :jira_board_id

child project_members: :members do
  extends('api/project_members/index')
end

node(:sprints_count) do |project|
  project.sprints.count
end
