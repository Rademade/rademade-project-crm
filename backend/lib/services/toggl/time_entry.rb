module Toggl
  class TimeEntry
# {
#              "id" => 641895345,
#            "guid" => "2406e23cb1568f527911d024ba72cb59",
#             "wid" => 197313,
#             "pid" => 52810990,
#        "billable" => true,
#           "start" => "2017-07-17T09:17:24+00:00",
#        "duration" => -1500283045,
#     "description" => "JIra",
#         "duronly" => false,
#              "at" => "2017-07-17T09:17:25+00:00",
#             "uid" => 1455217
# }
    def initialize(toggl_entry_data)
      @data ||= toggl_entry_data
    end

    def current?
      !@data['stop']
    end

    def duration
      if current?
        duration_in_progress
      else
        @data['duration']
      end
    end

    private

    def duration_in_progress
      DateTime.current.utc.to_i - start_at.utc.to_i
    end

    def start_at
      @start_at ||= DateTime.parse(@data['start'])
    end

  end
end