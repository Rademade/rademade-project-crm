class Toggle::Sprint

  attr_reader :sprint

  def initialize(sprint)
    @sprint = sprint
  end

  def inspect
    TimeFormatter.sec_to_h_m(toggle_time)
  end

  def toggle_time
    sprint.member_details.sum(:time) 
  end

end
