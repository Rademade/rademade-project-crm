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

  has_many :sprints, class_name: 'Project::Sprint',
                     dependent: :destroy
  has_many :project_members, :class_name => 'Project::Member', dependent: :destroy
  accepts_nested_attributes_for :project_members, allow_destroy: true

end
