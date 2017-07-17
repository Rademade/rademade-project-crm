module Jira
  module Sync
    # Update project model from jira
    class Sprint

      attr_reader :jira_sprint, :project

      def initialize(project:, jira_sprint:)
        @project = project
        @jira_sprint = jira_sprint
      end

      def call
        sprint.update!(update_attributes)
      end

      def update_attributes
        {
          name:               jira_sprint.name,
          start_at:           jira_sprint.start_at,
          end_at:             jira_sprint.end_at,
          sprint_story_point: jira_sprint.total_story_points,
          status:             jira_sprint.status
        }
      end

      def sprint
        @sprint ||= project.sprints.find_or_create_by!(jira_key: jira_sprint.id)
      end

    end
  end
end
