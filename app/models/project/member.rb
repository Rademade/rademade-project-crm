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
# Indexes
#
#  by_project_developer                   (project_id,developer_id) UNIQUE
#  index_project_members_on_developer_id  (developer_id)
#  index_project_members_on_project_id    (project_id)
#
# Foreign Keys
#
#  fk_rails_...  (developer_id => developers.id)
#  fk_rails_...  (project_id => projects.id)
#

class Project::Member < ApplicationRecord

  belongs_to :project
  belongs_to :developer

  has_many :member_details,
           class_name: 'Project::Sprint::MemberDetail',
           foreign_key: :project_member_id,
           dependent: :destroy

  validates :project, :developer, presence: true

end