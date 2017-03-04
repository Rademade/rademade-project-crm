class Project < ApplicationRecord
  has_many :project_sprints, :class_name => 'Project::Sprint'
  has_many :project_members, :class_name => 'Project::Member'
end
