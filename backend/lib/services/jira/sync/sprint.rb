module Jira
  module Sync
    # Jira::Sync::Sprint.new(project:, jira_sprint).call
    # Update project model from jira
    class Sprint

      attr_reader :jira_sprint, :project

      def initialize(project:, jira_sprint: nil, jira_key: nil)
        @project = project
        @jira_sprint = jira_sprint || Jira::Resources::Project::Sprint.new(project_key: project.jira_key,
                                                                           id: jira_key)
      end

      def call
        sprint.member_details.destroy_all
        sprint.update!(update_attributes)
      end

      def update_attributes
        {
          name:               jira_sprint.name,
          start_at:           jira_sprint.start_at,
          end_at:             jira_sprint.end_at,
          sprint_story_point: jira_sprint.total_story_points,
          status:             jira_sprint.status,
          member_details_attributes: member_details_attributes
        }.compact
      end

      def sprint
        @sprint ||= project.sprints.find_or_create_by!(jira_key: jira_sprint.id)
      end

      def member_details_attributes
        jira_sprint.users.map do |user|
          {
            developer: Developer.create_with(name: user[:name]).find_by!(email: user[:email]),
            story_points: user[:story_points]
            # task_count: user[:tast_count]
          }
        end
      end

    end
  end
end
