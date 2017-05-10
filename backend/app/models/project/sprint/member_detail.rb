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

class Project::Sprint::MemberDetail < ApplicationRecord
  belongs_to :project_sprint, :class_name => 'Project::Sprint'
  belongs_to :project_mewmber, :class_name => 'Project::Member'
end
