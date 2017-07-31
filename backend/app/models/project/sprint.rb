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
#  fk_rails_1a3f849b20  (project_id => projects.id)
#

class Project::Sprint < ApplicationRecord

  belongs_to :project

  has_many :member_details, class_name: 'Project::Sprint::MemberDetail',
                            foreign_key: :project_sprint_id,
                            dependent: :destroy

  has_many :issues,         class_name: 'Project::Issue', dependent: :nullify


  enum status: [:active, :closed]

  def complete_sp
    project.sprints.where('end_at::timestamp <= ?::timestamp', end_at).sum(&:sprint_story_point)
  end

  def jira_client
    @jira_info ||= Jira::Resources::Project::Sprint.new(id: jira_key, project_key: project.jira_key)
  end

  def jira_sync
    Jira::Sync::Sprint.new(project: project, jira_key: jira_key).call
  end

  def toggle_time
    @toggle_time ||= member_details.sum(&:toggle_time)
  end

end
