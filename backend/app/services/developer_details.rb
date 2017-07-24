class DeveloperDetailsService

  def initialize(toggl_api_key:)
    @toggl_api_key = toggl_api_key
  end

  def duration(start_at, end_at)
    @duration ||= entries(start_at: start_at, end_at: end_at).sum(&:duration)
  end

  def toggl
    @toggl ||= ::TogglV8::API.new(@toggl_api_key)
  end

  def entries(start_at:, end_at:)
    @entries ||= toggl.get_time_entries(start_date: start_at, end_date: end_at).map do |e|
      ::Toggl::TimeEntry.new(e)
    end
  end

end