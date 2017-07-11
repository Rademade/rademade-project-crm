# == Schema Information
#
# Table name: project_members
#
#  id           :integer          not null, primary key
#  project_id   :integer
#  developer_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  rate         :integer
#  hours        :integer
#

class Project::Member < ApplicationRecord
  belongs_to :project
  belongs_to :developer
  has_many :project_sprint_member_details,
           class_name: 'Project::Sprint::MemberDetail',
           foreign_key: :project_member_id,
           dependent: :destroy
end
