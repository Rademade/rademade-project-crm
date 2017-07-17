# == Schema Information
#
# Table name: projects
#
#  id         :integer          not null, primary key
#  name       :string
#  rate       :decimal(5, 2)
#  toggl_pid  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  jira_key   :string
#

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
