class AddTotalStoryPointsToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :total_story_points, :decimal, default: 0
  end
end
