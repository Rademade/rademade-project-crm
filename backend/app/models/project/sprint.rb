# == Schema Information
#
# Table name: project_sprints
#
#  id                 :integer          not null, primary key
#  name               :string
#  project_id         :integer
#  date_start         :date
#  date_end           :date
#  backlog_estimation :decimal(, )
#  sprint_story_point :decimal(, )
#  closed_story_point :decimal(, )
#  time_spent         :decimal(, )
#  status             :decimal(, )
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Project::Sprint < ApplicationRecord

  STATUS_ACTIVE = 1
  STATUS_CLOSED = 2
  STATUS_FORECAST = 3

  belongs_to :project
  has_many :project_sprint_member_details, :class_name => 'Project::Sprint::MemberDetail', dependent: :destroy

  scope :closed, -> { where(:status => STATUS_CLOSED) }

  validates_inclusion_of :status, in: [STATUS_CLOSED, STATUS_ACTIVE, STATUS_FORECAST]

end
