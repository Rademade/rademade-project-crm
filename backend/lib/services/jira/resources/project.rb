module Jira
  module Resources
    # Jira::Resources::Project.new('H24')
    class Project

      def self.all_keys
        Jira::Config.client.Project.all({}).map { |p| p.attrs['key'] }
      end

      def initialize(key)  # H24
        @data = client.Project.find(key)
      end

      def data
        @data
      end

      def boards
        @boards ||= agile['values'].map do |board|
          Jira::Resources::Project::Board.new(id: board['id'], name: board['name'], client: @data.client)
        end
      end

      def agile
        @agile ||= @data.client.Project.find('H24').client.Agile.all
      end

      def active_sprint
        @active_sprint ||= sprints.select(&:active?).last
      end

      def sprints
        @sprints ||= boards.map { |board| board.sprints }.flatten.uniq { |sprint| sprint.id }
      end

      def issues
        return @issues if @issues
        @issues ||= []
        exists = true
        start_at = 0
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
        issues.sum { |issue| issue.story_points || 0 }
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