require "rails_helper"

RSpec.describe Api::JiraHooks::SprintClosedController, type: :controller do
  describe "#create" do
    
    it "responds successfully with an HTTP 200 status code" do
      post :create, params: { project_key: 12, sprint_id: 23 }
    end

  end
end
