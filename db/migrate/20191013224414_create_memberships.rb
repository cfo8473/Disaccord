class CreateMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
      t.integer :user_id, null: false
      t.string :membership_type, null: false, polymorphic: true
      t.integer :membership_id, null: false, polymorphic: true

      t.timestamps
    end
    add_index :memberships, :user_id
    add_index :memberships, :membership_id

  end
end
