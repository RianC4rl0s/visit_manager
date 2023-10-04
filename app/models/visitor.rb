class Visitor < ApplicationRecord
    has_and_belongs_to_many :sectors

    mount_uploader :foto, ImageUploader

end
