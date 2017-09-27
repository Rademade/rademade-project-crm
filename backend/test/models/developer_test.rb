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
#  fk_rails_...  (department_id => departments.id)
#

require 'test_helper'

class DeveloperTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
