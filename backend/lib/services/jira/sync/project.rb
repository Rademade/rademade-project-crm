module Jira
  module Sync
    # Update project model from jira Jira::Sync::Project
    class Project

      attr_reader :project

      def initialize(project)
        @project = project
      end

      def call
        reload_issues

        update_active_sprint

        update_project
      end

      def update_project
        project.update!(
          total_story_points: project.issues.estimated.sum(&:story_points)
        )
      end

      def reload_issues
        jira_client.issues(@project.issues.count).each do |jira_issue|
          Jira::Sync::Issue.new(jira_issue: jira_issue, project_id: project.id).call
        end
      end

      def update_all_sprints
        jira_client.sprints.each do |jira_sprint|
          update_sprint(jira_sprint)
        end
      end

      def update_active_sprint
        update_sprint(jira_client.active_sprint)
      end

      private

      def update_sprint(jira_sprint)
        Jira::Sync::Sprint.new(project: project, jira_sprint: jira_sprint).call
      end

      def jira_client
        @project.jira_client
      end

    end
  end
end
