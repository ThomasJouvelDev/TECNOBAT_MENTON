class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :message
      t.string :email
      t.string :tel

      t.timestamps
    end
  end
end
