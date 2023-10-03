class Sector < ApplicationRecord
  belongs_to :division
  has_and_belongs_to_many :visitors
end
