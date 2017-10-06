class Inspect::MemberDetail::Percent
 
  attr_reader :member_detail

  def initialize(member_detail)
    @member_detail = member_detail
  end

  def call
    return 0 if spent_time <= 0
    (planned_time / spent_time * 100).to_i
  end

  def planned_time
    @planned_time ||= (member_detail.member.hours * 3600).to_f
  end

  def spent_time
    @spent_time ||= member_detail.time.to_f 
  end

end
