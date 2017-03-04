class SprintDetailsService

  def reload
    reload_toggl_report
    reload_forecast
  end

  def reload_forecast
    # TODO
  end

  def reload_toggl_report
    @sprint.project.member.each do |member|
      member_details = Project::Sprint::MemberDetail.find_or_create_by({
        sprint: @sprint,
        member: member
      })
      member_details.duration = MemberDetailsService.new(@sprint, member).duration
      member_details.save
    end
  end

  protected
  # @param [Sprint] sprint
  def initialize(sprint)
    @sprint = sprint
  end

end