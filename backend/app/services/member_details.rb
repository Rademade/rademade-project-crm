class MemberDetailsService

  def duration

  end

  protected
  # @param [Sprint] sprint
  # @param [Member] member
  def initialize(sprint, member)
    @sprint = sprint
    @member = member
  end

  private
  # -u 1971800d4d82861d8f2c1651fea4d212:api_toke
  # https://github.com/toggl/toggl_api_docs/blob/master/chapters/time_entries.md#get-time-entries-started-in-a-specific-time-range

  def entries
    # TODO
    # https://www.toggl.com/api/v8/time_entries?start_date=&end_date=&pid=&1
  end

end