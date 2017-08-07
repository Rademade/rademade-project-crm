module Jira
  module Sync
    # Jira::Sync::Sprint.new(project:, jira_sprint).call
    # Update project model from jira
    class Sprint

      attr_reader :jira_sprint, :project

      def initialize(project:, jira_sprint: nil, jira_key: nil)
        @project = project
        @jira_sprint = jira_sprint || Jira::Resources::Project::Sprint.new(project_key: project.jira_key,
                                                                           id: jira_key)
      end

      def call
        reload_issues

        update_member_details

        update_sprint
      end

      def update_sprint
        sprint.update!(
          {
            name:               jira_sprint.name,
            sprint_story_point: sprint.issues.where.not(story_points: nil).sum(&:story_points),
            status:             jira_sprint.status,
            start_at:           jira_sprint.issues.first.start_at,
            end_at:             jira_sprint.issues.first.completed_at
          }.compact
        )
      end

      def sprint
        @sprint ||= project.sprints.find_or_create_by!(jira_key: jira_sprint.id)
      end

      def update_member_details
        project_members.each do |member|
          update_member_detail_time(member_detail(member))
        end
      end

      def update_member_detail_time(member_detail)
        time = Toggle::MemberDetail.new(member_detail).toggle_time
        member_detail.update!(time: time)
      end

      def project_members
        @project_members ||= ::Project::Member.where(developer_id: sprint.developer_ids)
      end

      def member_detail(member)
        member.member_details.find_or_create_by!(project_sprint_id: sprint.id)
      end
      
      def reload_issues
        return if sprint.closed?
        jira_sprint.issues.map do |jira_issue|
          ::Jira::Sync::Issue.new(jira_issue: jira_issue,
                                  sprint_id: sprint.id,
                                  project_id: sprint.project.id).call
        end
      end

    end
  end
end
