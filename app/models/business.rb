# == Schema Information
#
# Table name: businesses
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  address      :string           not null
#  phone_number :string           not null
#

class Business < ApplicationRecord
    validates :name, presence: true

    has_many_attached :photos

    has_many :reviews,
        foreign_key: :business_id,
        class_name: :Review
end
