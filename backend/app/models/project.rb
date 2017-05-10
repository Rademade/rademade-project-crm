# == Schema Information
#
# Table name: projects
#
#  id         :integer          not null, primary key
#  name       :string
#  rate       :decimal(5, 2)
#  toggl_pid  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Project < ApplicationRecord
  has_many :project_sprints, :class_name => 'Project::Sprint'
  has_many :project_members, :class_name => 'Project::Member'
  accepts_nested_attributes_for :project_members, allow_destroy: true
end
