# == Schema Information
#
# Table name: projects
#
#  id                 :integer          not null, primary key
#  name               :string
#  rate               :decimal(5, 2)
#  toggl_pid          :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  jira_key           :string
#  total_story_points :decimal(, )      default(0.0)
#  jira_board_id      :integer
#

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
