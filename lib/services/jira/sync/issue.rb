module Jira
  module Sync
    # :nodoc: Jira::Sync::Issue.new(jira_issue: jira_issue)
    class Issue

      attr_reader :jira_issue

      def initialize(jira_issue:, project_id: nil, sprint_id: nil)
        @jira_issue = jira_issue
        @project_id = project_id
        @sprint_id = sprint_id
      end

      def call
        issue.update!({
          jira_info:            jira_issue.data,
          jira_key:             jira_issue.id,
          project_id:           project_id,
          project_sprint_id:    sprint_id,
          start_at:             jira_issue.start_at,
          end_at:               jira_issue.end_at,
          status:               jira_issue.status,
          assignee:             assignee(jira_issue),
          story_points:         jira_issue.story_points
        }.compact)
      end

      def assignee(jira_issue)
        return nil unless jira_issue.assignee
        ::Developer.find_or_create_by!(email: jira_issue.assignee[:email])
      end

      def issue
        @issue ||= ::Project::Issue.find_or_create_by!(jira_key: jira_issue.id)
      end

      def project_id
        @project_id || issue.project.id
      end

      def sprint_id
        @sprint_id || issue.project_sprint&.id
      end

    end
  end
end