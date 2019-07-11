class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :label, null: false
      t.integer :business_id, null: false
      t.timestamps
    end
    add_index :tags, :business_id
  end
end
