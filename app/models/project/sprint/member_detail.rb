# == Schema Information
#
# Table name: project_sprint_member_details
#
#  id                :integer          not null, primary key
#  project_sprint_id :integer
#  project_member_id :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  time              :integer          default(0)
#
# Indexes
#
#  by_sprint_member                                          (project_sprint_id,project_member_id) UNIQUE
#  index_project_sprint_member_details_on_project_member_id  (project_member_id)
#  index_project_sprint_member_details_on_project_sprint_id  (project_sprint_id)
#
# Foreign Keys
#
#  fk_rails_...  (project_member_id => project_members.id)
#  fk_rails_...  (project_sprint_id => project_sprints.id)
#

require 'project/sprint'

class Project::Sprint::MemberDetail < ApplicationRecord

  belongs_to :sprint, class_name: 'Project::Sprint',
                      foreign_key: :project_sprint_id

  belongs_to :member, class_name: 'Project::Member',
                      foreign_key: :project_member_id

  has_one :developer, class_name: 'Developer',
                      through: :member

  has_one :department, class_name: 'Department',
                       through: :developer

  validates :sprint, :member, presence: true

end