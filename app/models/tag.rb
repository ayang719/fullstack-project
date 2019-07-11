class Tag < ApplicationRecord
    validates :business_id, :label, presence: true

    belongs_to :business
end
