class Project::Sprint::MemberDetail < ApplicationRecord
  belongs_to :project_sprint, :class_name => 'Project::Sprint'
  belongs_to :project_member, :class_name => 'Project::Member'
end
