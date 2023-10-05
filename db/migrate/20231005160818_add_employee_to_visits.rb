class AddEmployeeToVisits < ActiveRecord::Migration[7.0]
  def change
    add_reference :visits, :employee,  foreign_key: true #null: false,
  end
end
