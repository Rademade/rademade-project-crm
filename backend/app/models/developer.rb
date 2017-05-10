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

class Developer < ApplicationRecord
  belongs_to :department
end
