# == Schema Information
#
# Table name: project_sprints
#
#  id                 :integer          not null, primary key
#  name               :string
#  project_id         :integer
#  start_at           :datetime
#  end_at             :datetime
#  backlog_estimation :decimal(, )
#  sprint_story_point :decimal(, )
#  closed_story_point :decimal(, )
#  time_spent         :decimal(, )
#  status             :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  jira_key           :integer
#
# Indexes
#
#  index_project_sprints_on_project_id  (project_id)
#
# Foreign Keys
#
#  fk_rails_...  (project_id => projects.id)
#

require 'test_helper'

class Project::SprintTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
