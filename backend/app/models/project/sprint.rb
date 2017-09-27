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
#  fk_rails_...  (project_id => projects.id)
#

require 'project'

class Project::Sprint < ApplicationRecord

  scope :end_at, ->(end_at) {
    where('end_at::timestamp <= ?::timestamp', end_at)
  }

  belongs_to :project

  has_many :member_details, class_name: 'Project::Sprint::MemberDetail',
                            foreign_key: :project_sprint_id,
                            dependent: :destroy

  has_many :issues,         class_name: 'Project::Issue',
                            foreign_key: :project_sprint_id,
                            dependent: :nullify

  has_many :developers, proc { all.distinct }, class_name: 'Developer',
                                               through: :issues,
                                               source: :assignee


  enum status: [:active, :closed]

end
