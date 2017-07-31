class MemberDetailsService

  attr_reader :member

  def initialize(member)
    @member = member
  end

  def duration(start_at, end_at)
    @duration ||= entries(start_at, end_at).sum(&:duration)
  end

  def entries(start_at, end_at)
    @entries ||= @member.developer.toggle.entries(start_at, end_at)
      .select { |time_entry|
        time_entry.project_toggl_pid.to_s == @member.project.toggl_pid.to_s
    }
  end

end