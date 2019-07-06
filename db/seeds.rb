# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

demoUser = User.create!(name: 'Demo User', email: 'kelpman@gmail.com', password: 'password')

mcdonalds = Business.create!({name: "McDonald's", address: '235 N Front St, San Francisco, CA 94111', phone_number: '415-397-6333'});
mcdonalds.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/grand-big-mac.jpg'), filename: 'grand-big-mac.jpg')
mcdonalds.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/burger-fries.jpg'), filename: 'burger-fries.jpg')
mcdonalds.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/mcnuggets.jpg'), filename: 'mcnuggets.jpg')

