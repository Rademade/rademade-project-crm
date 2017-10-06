class AddTimeToMemberDetails < ActiveRecord::Migration[5.0]
  def change
    add_column :project_sprint_member_details, :time, :integer, default: 0
  end
end
