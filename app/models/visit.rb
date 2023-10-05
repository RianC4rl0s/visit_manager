class Visit < ApplicationRecord
  belongs_to :visitor
  belongs_to :sector
  belongs_to :employee, optional: true
end
