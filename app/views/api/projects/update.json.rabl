object @project
extends('api/projects/show')

node(:sprints_count) do |project|
  project.sprints.count
end