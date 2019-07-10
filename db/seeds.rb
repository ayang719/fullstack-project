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
user2 = User.create!(name: "Paul Cho", email: 'pcho@asauna.com', password: 'imascrub')
user3 = User.create!(name: 'David Song', email: 'dsong@yollow.com', password: 'imhellaweak')
user4 = User.create!(name: 'Emarson Serrano', email: 'eserrano@revw.com', password:'myreviewplatformisbetter')

mcdonalds = Business.create!({name: "McDonald's", address: '235 N Front St, San Francisco, CA 94111', phone_number: '415-397-6333'});
mcdonalds.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/grand-big-mac.jpg'), filename: 'grand-big-mac.jpg')
mcdonalds.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/burger-fries.jpg'), filename: 'burger-fries.jpg')
mcdonalds.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/mcnuggets.jpg'), filename: 'mcnuggets.jpg')

hogIsland = Business.create!({name: "Hog Island Oyster Co", address: 'Ferry Building, San Francisco, CA 94111', phone_number: '415-391-7117'});

hogIsland.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/o.jpg'), filename: 'o.jpg');
hogIsland.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/o+(1).jpg'), filename: 'o(1).jpg');
hogIsland.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/o+(2).jpg'), filename: 'o(2).jpg');

hi_review = Review.create!( author_id: user1.id, business_id: hogIsland.id, body: 'great food', rating: 5)
hi_review2 = Review.create!(author_id: user2.id, business_id: hogIsland.id, body: "The oysters are AMAZING. It's a little pricey but well worth it. Definitely reccommend trying the grilled oysters if you are looking for something a little different from the raw kind.", rating: 5)
hi_review3 = Review.create!(author_id: user3.id, business_id: hogIsland.id, rating: 4, body: 'Great vibes, fresh seafood. My only complaint would be that it is a little pricey')
hi_review4 = Review.create!(author_id: user4.id, business_id: hogIsland.id, rating: 5, body: "Best oysters I've ever had!")



mc_review = Review.create!( author_id: user1.id, business_id: mcdonalds.id, rating: 4, body: "Pretty good value here, I would recommend the McChicken or the McNuggets")
mc_review2 = Review.create!( author_id: user4.id, business_id: mcdonalds.id, rating: 2, body: "I don't know why I keep coming to these places, I never enjoy the food")
mc_review3 = Review.create!( author_id: user3.id, business_id: mcdonalds.id, rating: 3, body: "McDonald's is McDonalds")
mc_review4 = Review.create!( author_id: user2.id, business_id: mcdonalds.id, rating: 1, body: "The food doesn't look like how it looks in the advertisements!! What a letdown")

