module Jira
  module Resources
    # Jira::Resources::Issue.new(data)
    class Issue

      attr_reader :data

    #  == data
    # {
    #     "expand" => "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    #         "id" => "24841",
    #       "self" => "https://rademade.atlassian.net/rest/api/latest/issue/24841",
    #        "key" => "H24-319",
    #     "fields" => {
    #         "customfield_10016" => [
    #             [0] "com.atlassian.greenhopper.service.sprint.Sprint@1edfc1c[id=139,rapidViewId=<null>,state=CLOSED,name=H24 Sprint 24,goal=<null>,startDate=2017-01-09T14:40:54.921+02:00,endDate=2017-01-23T14:40:00.000+02:00,completeDate=2017-01-27T16:21:33.764+02:00,sequence=139]",
    #             [1] "com.atlassian.greenhopper.service.sprint.Sprint@fc9be[id=143,rapidViewId=<null>,state=CLOSED,name=H24 Sprint 28,goal=<null>,startDate=2017-03-06T17:15:58.742+02:00,endDate=2017-03-20T17:15:00.000+02:00,completeDate=2017-03-20T11:53:36.900+02:00,sequence=143]"
    #         ],
    #         "customfield_10022" => 2.0
    #     }
    # }

      def id
        @data['id']
      end

      def initialize(data)
        @data = data
      end

      def start_at
        info['startDate']
      end

      def end_at
        info['endDate']
      end

      def completed_at
        info['completeDate']
      end

      def status
        info['state']&.downcase
      end

      def active?
        info['state'] == 'ACTIVE'
      end

      def closed?
        info['state'] == 'CLOSED'
      end

      def future?
        info['state'] == 'FUTURE'
      end

      def story_points
        @data['fields']['customfield_10022']
      end

      def assignee
        return @assignee if @assignee
        _assignee = @data['fields']['assignee']
        return unless _assignee
        @assignee = {
          email: _assignee['emailAddress']
        }
      end

      private

      def info
        return {} unless @data['fields']['customfield_10016']
        @info ||= Hash[
          @data['fields']['customfield_10016']
            .last
            .gsub(/.*\[/, '').gsub(/\]/, '')
            .split(',').map { |raw_string| raw_string.split('=') }
            .select { |array| array.size == 2 }
            .map { |tuple| [tuple.first, tuple.last] }
        ]
      end

    end
  end
end
