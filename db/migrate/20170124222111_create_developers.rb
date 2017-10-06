class CreateDevelopers < ActiveRecord::Migration[5.0]
  def change
    create_table :developers do |t|
      t.string :name
      t.string :last_name
      t.string :toggl_api_key
      t.references :department, foreign_key: true

      t.timestamps
    end
  end
end
