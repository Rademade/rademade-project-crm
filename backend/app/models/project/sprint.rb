class Project::Sprint < ApplicationRecord

  STATUS_ACTIVE = 1
  STATUS_CLOSED = 2
  STATUS_FORECAST = 3

  belongs_to :project
  has_many :project_sprint_member_details, :class_name => 'Project::Sprint::MemberDetail'

  scope :closed, -> { where(:status => STATUS_CLOSED) }

  validates_inclusion_of :status, in: [STATUS_CLOSED, STATUS_ACTIVE, STATUS_FORECAST]

end
