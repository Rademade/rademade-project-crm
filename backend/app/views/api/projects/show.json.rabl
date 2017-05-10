object @project
attributes :id, :name, :toggl_pid

child project_members: :members do
  extends('api/project_members/index')
end
