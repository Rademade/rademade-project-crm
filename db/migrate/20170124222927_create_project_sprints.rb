class CreateProjectSprints < ActiveRecord::Migration[5.0]
  def change
    create_table :project_sprints do |t|
      t.string :name
      t.references :project, foreign_key: true
      t.date :date_start
      t.date :date_end
      t.numeric :backlog_estimation
      t.numeric :sprint_story_point
      t.numeric :closed_story_point
      t.numeric :time_spent
      t.numeric :status

      t.timestamps
    end
  end
end
