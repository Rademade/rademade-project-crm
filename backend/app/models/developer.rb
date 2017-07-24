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

  validates :toggl_api_key, :department, presence: true

  def toggl
    @toggl ||= DeveloperDetailsService.new(toggl_api_key: toggl_api_key)
  end

  def toggl_duration(start_at, end_at)
    toggl.duration(start_at, end_at)
  end

end
