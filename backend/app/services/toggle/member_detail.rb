class Toggle::MemberDetail

  attr_reader :member_detail

  def initialize(member_detail)
    @member_detail = member_detail
  end

  def inspect
    TimeFormatter.sec_to_h_m(toggle_time)
  end

  def toggle_time
    return 0 unless sprint.start_at
    @toggle_time ||= Toggle::Member.new(member).duration(sprint.start_at, (sprint.end_at || DateTime.current))
  end

  def member
    @member ||= member_detail.member
  end

  def sprint
    @sprint ||= member_detail.sprint
  end

end
