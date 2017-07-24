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

class Project < ApplicationRecord

  has_many :sprints, proc { order(end_at: :desc) }, class_name: 'Project::Sprint',
                                                    dependent: :destroy

  has_many :project_members, class_name: 'Project::Member',
                             dependent: :destroy

  accepts_nested_attributes_for :project_members, allow_destroy: true


  def jira_client
    @jira_client ||= Jira::Resources::Project.new(jira_key)
  end

  def story_points
    jira_client.total_story_points
  end

end
