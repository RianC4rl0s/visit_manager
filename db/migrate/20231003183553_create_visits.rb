class CreateVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :visits do |t|
      t.datetime :visit_date
      t.references :visitor, null: false, foreign_key: true
      t.references :sector, null: false, foreign_key: true

      t.timestamps
    end
  end
end
