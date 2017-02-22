class CreateProjectSprintMemberDetails < ActiveRecord::Migration[5.0]
  def change
    create_table :project_sprint_member_details do |t|
      t.references :project_sprint, foreign_key: true
      t.references :project_member, foreign_key: true

      t.timestamps
    end
  end
end
