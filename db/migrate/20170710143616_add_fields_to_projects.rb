class AddFieldsToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :jira_key, :string
  end
end
