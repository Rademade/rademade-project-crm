# == Schema Information
#
# Table name: project_sprints
#
#  id                 :integer          not null, primary key
#  name               :string
#  project_id         :integer
#  start_at           :date
#  end_at             :date
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
#  fk_rails_1a3f849b20  (project_id => projects.id)
#

class Project::Sprint < ApplicationRecord

  belongs_to :project
  has_many :member_details, class_name: 'Project::Sprint::MemberDetail',
                            foreign_key: :project_sprint_id,
                            dependent: :destroy
  enum status: [:active, :closed]

  def complete_sp
    project.sprints.where('end_at::timestamp <= ?::timestamp', end_at).sum(&:sprint_story_point)
  end

end
