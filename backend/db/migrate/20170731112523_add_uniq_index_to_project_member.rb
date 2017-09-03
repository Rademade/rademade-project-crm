class AddUniqIndexToProjectMember < ActiveRecord::Migration[5.0]

  def change
    add_index :project_members, [:project_id, :developer_id], unique: true,  name: 'by_project_developer'
    add_index :project_sprint_member_details, [:project_sprint_id, :project_member_id], unique: true,  name: 'by_sprint_member'
  end

end