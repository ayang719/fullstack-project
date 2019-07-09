# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

demoUser = User.create!(name: 'Demo User', email: 'kelpman@gmail.com', password: 'password')
user1 = User.create!(name: 'Alex Yang', email: 'ayang719@gmail.com', password: 'password')



mcdonalds = Business.create!({name: "McDonald's", address: '235 N Front St, San Francisco, CA 94111', phone_number: '415-397-6333'});
mcdonalds.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/grand-big-mac.jpg'), filename: 'grand-big-mac.jpg')
mcdonalds.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/burger-fries.jpg'), filename: 'burger-fries.jpg')
mcdonalds.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/mcnuggets.jpg'), filename: 'mcnuggets.jpg')

hogIsland = Business.create!({name: "Hog Island Oyster Co", address: 'Ferry Building, San Francisco, CA 94111', phone_number: '415-391-7117'});

hogIsland.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/o.jpg'), filename: 'o.jpg');
hogIsland.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/o+(1).jpg'), filename: 'o(1).jpg');
hogIsland.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/o+(2).jpg'), filename: 'o(2).jpg');

hi_review = Review.create!( author_id: 1, business_id: hogIsland.id, body: 'great food', rating: 5)
