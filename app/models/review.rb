# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  business_id :integer          not null
#  body        :string           not null
#  rating      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord
    validates :author_id, :business_id, :body, :rating, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
    
    belongs_to :business
end
