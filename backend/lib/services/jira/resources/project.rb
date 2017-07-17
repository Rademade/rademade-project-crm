module Jira
  module Resources
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

      def total_story_points
        @total_story_points ||= sprints.sum(&:total_story_points)
      end

      def active_sprint
        @active_sprint ||= sprints.select(&:active?).last
      end

      def sprints
        @sprints ||= boards.map { |board| board.sprints }.flatten.uniq { |sprint| sprint.id }
      end

      def client
        @client ||= Jira::Config.client
      end

    end
  end
end