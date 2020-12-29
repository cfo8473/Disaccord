class DropTables < ActiveRecord::Migration[5.2]
  def change 
    drop_table :posts
    drop_table :icons
  end
end
