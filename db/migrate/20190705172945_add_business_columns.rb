class AddBusinessColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :address, :string, null: false
    add_column :businesses, :phone_number, :string, null: false
    add_index :businesses, :address, unique: true
    add_index :businesses, :phone_number, unique: true 
  end
end
