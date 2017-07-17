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
# Indexes
#
#  index_project_sprint_member_details_on_project_member_id  (project_member_id)
#  index_project_sprint_member_details_on_project_sprint_id  (project_sprint_id)
#
# Foreign Keys
#
#  fk_rails_74ac87073c  (project_member_id => project_members.id)
#  fk_rails_ef59019867  (project_sprint_id => project_sprints.id)
#

class Project::Sprint::MemberDetail < ApplicationRecord
  belongs_to :project_sprint, :class_name => 'Project::Sprint'
  belongs_to :project_mewmber, :class_name => 'Project::Member'
end
