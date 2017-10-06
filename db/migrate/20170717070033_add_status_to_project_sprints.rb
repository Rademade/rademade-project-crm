class AddStatusToProjectSprints < ActiveRecord::Migration[5.0]

  def up
    change_column :project_sprints, :status, :integer
    add_column :project_sprints, :jira_key, :integer
    rename_column :project_sprints, :date_start, :start_at
    rename_column :project_sprints, :date_end, :end_at
  end

  def down
    change_column :project_sprints, :status, :decimal
    remove_column :project_sprints, :jira_key, :integer
    rename_column :project_sprints, :start_at, :date_start
    rename_column :project_sprints, :end_at, :date_end
  end

end
