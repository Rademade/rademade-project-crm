collection @projects

attributes :id, :name, :jira_key

node(:sprints_count) do |project|
  project.sprints.count
end
