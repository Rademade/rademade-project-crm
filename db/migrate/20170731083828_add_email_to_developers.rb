class AddEmailToDevelopers < ActiveRecord::Migration[5.0]

  def change
    add_column :developers, :email, :string
  end

end
