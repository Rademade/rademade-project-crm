class CreateIssues < ActiveRecord::Migration[5.0]

  def change
    create_table :issues do |t|
      t.string :jira_key
      t.datetime :start_at
      t.datetime :end_at
      t.datetime :completed_at
      t.integer :status
      t.decimal :story_points
      t.json :jira_info
      t.references :project, foreign_key: { on_delete: :cascade }
      t.references :project_sprint, foreign_key: { on_delete: :nullify }
      t.references :assignee
      t.index [:project_id, :jira_key], unique: true
      t.timestamps
    end

    add_foreign_key :issues, :developers, column: :assignee_id, on_delete: :nullify
  end

end
