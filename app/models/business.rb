# == Schema Information
#
# Table name: businesses
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Business < ApplicationRecord
    validates :name, presence: true

    has_many_attached :photos
end
