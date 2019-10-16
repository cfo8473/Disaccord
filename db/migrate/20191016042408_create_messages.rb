class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :channel_id, null: false
      t.boolean :pinned, null: false, default: false

      t.timestamps
    end
    add_index :messages, [:author_id, :channel_id]
  end
end
