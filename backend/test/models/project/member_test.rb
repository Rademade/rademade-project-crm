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
#  index_project_members_on_developer_id  (developer_id)
#  index_project_members_on_project_id    (project_id)
#
# Foreign Keys
#
#  fk_rails_c1a9ac14e5  (developer_id => developers.id)
#  fk_rails_f3b43b5269  (project_id => projects.id)
#

require 'test_helper'

class Project::MemberTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
