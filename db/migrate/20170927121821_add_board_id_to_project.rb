class AddBoardIdToProject < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :jira_board_id, :integer
  end
end
