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
  has_many :project_sprint_member_details, class_name: 'Project::Sprint::MemberDetail',
                                           dependent: :destroy

  # enum status: [:active, :closed]

end
