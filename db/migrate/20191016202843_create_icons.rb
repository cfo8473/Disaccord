class CreateIcons < ActiveRecord::Migration[5.2]
  def change
    create_table :icons do |t|
      t.integer :image_id, null: false
      t.string :icon_membership_type, null: false, polymorphic: true
      t.integer :icon_membership_id, null: false, polymorphic: true

      t.timestamps
    end
    add_index :icons, :image_id
    add_index :icons, :icon_membership_id
  end
end
