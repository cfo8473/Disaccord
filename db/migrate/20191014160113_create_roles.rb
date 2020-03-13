class CreateRoles < ActiveRecord::Migration[5.2]
  def change
    create_table :roles do |t|
      t.string :title, null: false
      t.string :color, null: false
      t.integer :permissions, null: false
      t.integer :server_id, null: false

      t.timestamps
    end
    add_index :roles, :server_id
  end
end
