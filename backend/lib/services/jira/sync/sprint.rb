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
        reload_issues

        update_sprint
      end

      def update_sprint
        sprint.update!(
          {
            name:               jira_sprint.name,
            sprint_story_point: sprint.issues.where.not(story_points: nil).sum(&:story_points),
            status:             jira_sprint.status
          }.compact
        )
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

      def reload_issues
        jira_sprint.issues.map do |jira_issue|
          ::Jira::Sync::Issue.new(jira_issue: jira_issue,
                                  sprint_id: sprint.id,
                                  project_id: sprint.project.id).call
        end
      end

    end
  end
end