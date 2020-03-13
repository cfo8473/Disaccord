class CreateRoleChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :role_channels do |t|
      t.integer :role_id, null: false
      t.integer :channel_id, null: false
      t.timestamps
    end
    add_index :role_channels, :role_id
    add_index :role_channels, :channel_id
  end
end
