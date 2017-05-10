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

require 'test_helper'

class Project::MemberTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
