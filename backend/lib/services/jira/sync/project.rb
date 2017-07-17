module Jira
  module Sync
    # Update project model from jira
    class Project

      attr_reader :project

      def initialize(project)
        @project = project
      end

      def call
        update_active_sprint
      end

      def update_all_sprints
        jira_project.sprints.each do |jira_sprint|
          update_sprint(jira_sprint)
        end
      end

      def update_active_sprint
        update_sprint(jira_project.active_sprint)
      end

      def jira_project
        @jira_project ||= Jira::Resources::Project.new(@project.jira_key)
      end

      private

      def update_sprint(jira_sprint)
        Jira::Sync::Sprint.new(project: project, jira_sprint: jira_sprint).call
      end

    end
  end
end
