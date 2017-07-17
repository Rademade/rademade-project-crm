class Jira::Resources::Project::Sprint

  # {
  #                   "id" => 139,
  #             "sequence" => 139,
  #                 "name" => "H24 Sprint 24",
  #                "state" => "CLOSED",
  #     "linkedPagesCount" => 0
  # }

  attr_reader :id, :name

  def initialize(id:, name:, state:, client:)
    @id = id
    @name = name
    @state = state
    @client = client
  end

  def data
    # {
    #     "expand" => "schema,names",
    #    "startAt" => 0,
    # "maxResults" => 100,
    #      "total" => 93,
    #     "issues" => [
    #     [ 0] {
    #         "expand" => "operations,versionedRepresentations,editmeta,changelog,renderedFields",
    #             "id" => "30219",
    #           "self" => "https://rademade.atlassian.net/rest/api/latest/issue/30219",
    #            "key" => "H24-2869",
    #         "fields" => {
    #             "customfield_10016" => [
    #                 [0] "com.atlassian.greenhopper.service.sprint.Sprint@178ea87[id=153,rapidViewId=39,state=ACTIVE,name=H24 Sprint 35,goal=,startDate=2017-06-26T18:40:23.419+03:00,endDate=2017-07-10T18:40:00.000+03:00,completeDate=<null>,sequence=153]"
    #             ],
    #             "customfield_10022" => nil
    #         }
    # },
    @data ||= @client.Sprint.find(id, { fields: ['customfield_10016', 'customfield_10022'] })
  end

  def status
    active? ? 'active' : 'closed'
  end

  def active?
    @state == 'ACTIVE'
  end

  def closed?
    @state == 'CLOSED'
  end

  def total_story_points
    issues.sum { |issue| issue.story_points || 0 }
  end

  def complete_story_points
    issues.select(&:closed?).sum(&:story_points)
  end

  def start_at
    @start_at ||= issues.first.start_at
  end

  def end_at
    @end_at ||= issues.first.completed_at
  end

  def issues
    @issues ||= data['issues'].map { |issue| Jira::Resources::Issue.new(issue) }
  end

end