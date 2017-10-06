class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.decimal :rate, precision: 5, scale: 2
      t.string :toggl_pid

      t.timestamps
    end
  end
end
