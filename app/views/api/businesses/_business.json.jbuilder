json.extract! business, :id, :name, :address, :phone_number
json.photoUrls business.photos.map { |file| url_for(file) }
json.reviewRatings business.reviews.map {|review| review.rating}
json.tagLabels  business.tags.map {|tag| tag.label }
json.lat business.lat
json.lng business.lng
    