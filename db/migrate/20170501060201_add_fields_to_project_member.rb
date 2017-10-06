class AddFieldsToProjectMember < ActiveRecord::Migration[5.0]
  def change
    add_column :project_members, :rate, :integer
    add_column :project_members, :hours, :integer
  end
end
