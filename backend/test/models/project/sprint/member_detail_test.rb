# == Schema Information
#
# Table name: project_sprint_member_details
#
#  id                :integer          not null, primary key
#  project_sprint_id :integer
#  project_member_id :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

require 'test_helper'

class Project::Sprint::MemberDetailTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
