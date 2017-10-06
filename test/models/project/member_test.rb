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

require 'test_helper'

class Project::MemberTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
