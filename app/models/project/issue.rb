# == Schema Information
#
# Table name: issues
#
#  id                :integer          not null, primary key
#  jira_key          :string
#  start_at          :datetime
#  end_at            :datetime
#  completed_at      :datetime
#  status            :integer
#  story_points      :decimal(, )
#  jira_info         :json
#  project_id        :integer
#  project_sprint_id :integer
#  assignee_id       :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
# Indexes
#
#  index_issues_on_assignee_id              (assignee_id)
#  index_issues_on_project_id               (project_id)
#  index_issues_on_project_id_and_jira_key  (project_id,jira_key) UNIQUE
#  index_issues_on_project_sprint_id        (project_sprint_id)
#
# Foreign Keys
#
#  fk_rails_...  (assignee_id => developers.id) ON DELETE => nullify
#  fk_rails_...  (project_id => projects.id) ON DELETE => cascade
#  fk_rails_...  (project_sprint_id => project_sprints.id) ON DELETE => nullify
#

require 'project'

class Project::Issue < ApplicationRecord

  self.table_name = 'issues'

  scope :estimated, proc { where.not(story_points: nil) }

  belongs_to :project

  belongs_to :project_sprint, class_name: 'Project::Sprint'

  belongs_to :assignee, class_name: 'Developer',
                        foreign_key: :assignee_id

  enum status: [:future, :active, :closed]

end
