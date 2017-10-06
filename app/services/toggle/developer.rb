class Toggle::Developer

  def initialize(toggl_api_key: nil, developer: nil)
    @toggl_api_key = toggl_api_key || developer.toggl_api_key
  end

  def duration(start_at, end_at)
    @duration ||= entries(start_at, end_at).sum(&:duration)
  end

  def toggl
    @toggl ||= ::TogglV8::API.new(@toggl_api_key)
  end

  def entries(start_at, end_at)
    @entries ||= toggl.get_time_entries(start_date: start_at.iso8601, end_date: end_at.iso8601).map do |e|
      ::Toggl::TimeEntry.new(e)
    end
  end

end
