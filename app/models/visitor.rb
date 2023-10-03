class Visitor < ApplicationRecord
    has_and_belongs_to_many :sectors
end
