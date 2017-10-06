module Jira
  module Resources
    # Jira::Resources::Project.new('H24')
    class Project

      def self.all_keys
        Jira::Config.client.Project.all({}).map { |p| p.attrs['key'] }
      end

      def initialize(key, jira_board_id)  # H24
        @key = key
        @jira_board_id = jira_board_id
        @data = client.Project.find(key)
      end

      def data
        @data
      end

      def agile
        client.Agile
      end

      def active_sprint
        @active_sprint ||= sprints.select(&:active?).last
      end

      def sprints
        @sprints ||= agile.get_sprints(@jira_board_id, { maxResults: 200 })['values'].map do |data|
          Jira::Resources::Project::Sprint.new(id: data['id'],
                                               name: data['name'],
                                               client: @client,
                                               state: data['state'])

        end
      end

      def issues(start_at = 0)
        return @issues if @issues
        @issues ||= []
        exists = true
        while exists
          step = 500
          issues = data.issues({ startAt: start_at, maxResults: step }).map do |issue|
            Jira::Resources::Issue.new(issue.attrs)
          end
          puts start_at
          exists = false if issues.empty?
          @issues = @issues.concat(issues)
          start_at += step
        end
        @issues
      end

      def total_story_points
        # TODO make custom request
        @total_story_points ||= issues.sum { |issue| issue.story_points || 0 }
      end

      def complete_story_points
        issues.select(&:closed?).sum(&:story_points)
      end

      def client
        @client ||= Jira::Config.client
      end

    end
  end
end
