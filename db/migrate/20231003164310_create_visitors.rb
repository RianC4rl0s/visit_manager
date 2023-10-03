class CreateVisitors < ActiveRecord::Migration[7.0]
  def change
    create_table :visitors do |t|
      t.string :name
      t.string :cpf, unique: true, null: false
      t.string :rg, unique: true, null: false
      t.string :telefone
      t.text :foto

      t.timestamps
    end
  end
end
