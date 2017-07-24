class ChangeDateToDateTime < ActiveRecord::Migration[5.0]

  def up
    change_column :project_sprints, :end_at, :datetime
    change_column :project_sprints, :start_at, :datetime
  end

  def down
  end

end
