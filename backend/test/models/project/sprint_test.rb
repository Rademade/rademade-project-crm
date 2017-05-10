# == Schema Information
#
# Table name: project_sprints
#
#  id                 :integer          not null, primary key
#  name               :string
#  project_id         :integer
#  date_start         :date
#  date_end           :date
#  backlog_estimation :decimal(, )
#  sprint_story_point :decimal(, )
#  closed_story_point :decimal(, )
#  time_spent         :decimal(, )
#  status             :decimal(, )
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

require 'test_helper'

class Project::SprintTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
