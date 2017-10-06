class Jira::Resources::Project::Board

   # {
   #          "id" => 30,
   #          "self" => "https://rademade.atlassian.net/rest/agile/1.0/board/30",
   #          "name" => "H24 board",
   #          "type" => "scrum"
   # },

  attr_reader :id, :name

  def initialize(id:, name:, client:)
    @id = id
    @name = name
    @client = client
  end

  def sprints
    @sprints ||= @client.Sprint.all(id)['sprints'].map do |data|
      Jira::Resources::Project::Sprint.new(id: data['id'],
                                           name: data['name'],
                                           client: @client,
                                           state: data['state'])
    end
  end

end