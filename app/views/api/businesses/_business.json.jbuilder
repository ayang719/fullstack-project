json.extract! business, :id, :name, :address, :phone_number
json.photoUrls business.photos.map { |file| url_for(file) }