# == Schema Information
#
# Table name: developers
#
#  id            :integer          not null, primary key
#  name          :string
#  last_name     :string
#  toggl_api_key :string
#  department_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  email         :string
#
# Indexes
#
#  index_developers_on_department_id  (department_id)
#
# Foreign Keys
#
#  fk_rails_6a08b005ec  (department_id => departments.id)
#

class Developer < ApplicationRecord

  belongs_to :department

  has_many :project_members, class_name: 'Project::Member',
                             dependent: :destroy

  has_many :issues, class_name: 'Project::Issue',
                    foreign_key: :assignee_id,
                    dependent: :nullify

  # validates :toggl_api_key, :department, presence: true
  validates :email, uniqueness: true

end
