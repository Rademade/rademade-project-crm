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
require 'project/sprint'

class Project::Sprint::MemberDetail < ApplicationRecord

  belongs_to :sprint, class_name: 'Project::Sprint'
  belongs_to :member, class_name: 'Project::Member'

  def toggle_time
    @toggle_time ||= member.toggle_time(sprint.start_at, sprint.end_at)
  end

end
