class Project::Member < ApplicationRecord
  belongs_to :project
  belongs_to :developer
  has_many :project_sprint_member_details, :class_name => 'Project::Sprint::MemberDetail'
end
