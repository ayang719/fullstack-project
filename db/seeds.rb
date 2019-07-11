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
hogIsland = Business.create!({name: "Hog Island Oyster Co", address: 'Ferry Building, San Francisco, CA 94111', phone_number: '415-391-7117'});
menshoTokyo = Business.create!({name: 'Mensho Tokyo', address: '672 Geary Stm San Francisco, CA 94102', phone_number:'415-800-8345'})
aburaya = Business.create!( name: 'Aburaya Japanese Fried Chicken', address: '362 17th St, Oakland, CA 94612', phone_number: '510-502-7743')
tacorea = Business.create!(name: 'Tacorea', address: '809 Bush St, San Francisco, CA 94108', phone_number: '415-885-1325')
cheeseBoard = Business.create!(name: 'Cheese Board Pizza', address: '1512 Shattuck Ave, Berkeley, CA 94709', phone_number: '510-549-3183')

cheeseBoard.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/cb1.jpg'), filname: 'cb1.jpg')
cheeseBoard.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/cb1.2pg'), filname: 'cb1.jpg')
cheeseBoard.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/cb1.3pg'), filname: 'cb1.jpg')

tacorea.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/taco1.jpg'), filename: 'taco1.jpg')
tacorea.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/taco2.jpg'), filename: 'taco2.jpg')
tacorea.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/taco3.jpg'), filename: 'taco3.jpg')

mcdonalds.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/grand-big-mac.jpg'), filename: 'grand-big-mac.jpg')
mcdonalds.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/burger-fries.jpg'), filename: 'burger-fries.jpg')
mcdonalds.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/mcnuggets.jpg'), filename: 'mcnuggets.jpg')


hogIsland.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/o.jpg'), filename: 'o.jpg');
hogIsland.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/o+(1).jpg'), filename: 'o(1).jpg');
hogIsland.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/o+(2).jpg'), filename: 'o(2).jpg');


menshoTokyo.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/mensho1.jpg'), filename: 'mensho1.jpg')
menshoTokyo.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/mensho2.jpg'), filename: 'mensho2.jpg')
menshoTokyo.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/mensho3.jpg'), filename: 'mensho3.jpg')

aburaya.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/abu1.jpg'), filename: 'abu1.jpg')
aburaya.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/abu2.jpg'), filename: 'abu2.jpg')
aburaya.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/abu3.jpg'), filename: 'abu3.jpg')

cbr1 = Review.create!(author_id: user2.id, business_id: cheeseBoard.id,  rating: 5, body: "I really can't believe I thought Pizza Hut was the best pizza before eating here LOL. Cheeseboard is literally lifechanging. ")
cbr2 = Review.create!(author_id: user3.id, business_id: cheeseBoard.id, rating: 4, body: "One of the best pizza I had in the bay area. There is a line but it moves really fast. Great customer service.")
cbr3 = Review.create!(author_id: user4.id, business_id: cheeseBoard.id, rating: 5, body: "My favorite pizza ever, and my favorite restaurant ever")
cbr4 = Review.create!(author_id: user1.id, business_id: cheeseBoard.id, rating: 4, body: "Really good pizza, no complaints here")

mt_review = Review.create!( author_id: user1.id, business_id: menshoTokyo.id, body:"Some of the best ramen I've had in San Francisco. Definitely recommend coming here", rating: 5)
mt_review2 = Review.create!( author_id: user2.id, business_id: menshoTokyo.id, rating: 3, body:"Good ramen, but I have definitely had better. I would say that I'm a ramen connoisseur ¯\_(ツ)_/¯")
mt_review3 = Review.create!( author_id: user3.id, business_id: menshoTokyo.id, rating: 5, body: "This was recommended by a friend and I was quite surprised at how good it was")

abu_review1 = Review.create!( author_id: user2.id, business_id: aburaya.id, body: 'My Favorite Restaurant ever!!! The fried chicken is so good', rating: 5)
abu_review1 = Review.create!( author_id: user1.id, business_id: aburaya.id, body: 'This fried chicken is really good', rating: 4)
abu_review1 = Review.create!( author_id: user3.id, business_id: aburaya.id, body: 'Good Chicken, Better vibes', rating: 4)
abu_review1 = Review.create!( author_id: user4.id, business_id: aburaya.id, body: 'Everything here was pretty good, but not the best. Solid place tho', rating: 3)

hi_review = Review.create!( author_id: user1.id, business_id: hogIsland.id, body: 'great food', rating: 5)
hi_review2 = Review.create!(author_id: user2.id, business_id: hogIsland.id, body: "The oysters are AMAZING. It's a little pricey but well worth it. Definitely reccommend trying the grilled oysters if you are looking for something a little different from the raw kind.", rating: 5)
hi_review3 = Review.create!(author_id: user3.id, business_id: hogIsland.id, rating: 4, body: 'Great vibes, fresh seafood. My only complaint would be that it is a little pricey')
hi_review4 = Review.create!(author_id: user4.id, business_id: hogIsland.id, rating: 5, body: "Best oysters I've ever had!")

mc_review = Review.create!( author_id: user1.id, business_id: mcdonalds.id, rating: 4, body: "Pretty good value here, I would recommend the McChicken or the McNuggets")
mc_review2 = Review.create!( author_id: user4.id, business_id: mcdonalds.id, rating: 2, body: "I don't know why I keep coming to these places, I never enjoy the food")
mc_review3 = Review.create!( author_id: user3.id, business_id: mcdonalds.id, rating: 3, body: "McDonald's is McDonalds")
mc_review4 = Review.create!( author_id: user2.id, business_id: mcdonalds.id, rating: 1, body: "The food doesn't look like how it looks in the advertisements!! What a letdown")

taco_review1 = Review.create!(author_id: user1.id, business_id: tacorea.id, rating: 5, body: 'The burritos are huge and really good. Recommend getting the California Burrito')
taco_review1 = Review.create!(author_id: user4.id, business_id: tacorea.id, rating: 4, body: 'Almost could finish my burrito. The tots are also very good, just would be better if they were hot')
taco_review1 = Review.create!(author_id: user2.id, business_id: tacorea.id, rating: 3, body: 'Average food.     We ordered the big Ricardo (definitely the best plate) it was quite tasty.  Their chips were stale and flavorless and the tacos were average.')
taco_review1 = Review.create!(author_id: user3.id, business_id: tacorea.id, rating: 4, body: 'Tacorea is one of my favorite go to restaurants in union square! They have limited seating inside the restaurant so I would recommend ordering for take out and enjoying your food somewhere else during peak times. ')


japaneseTag = Tag.create!(label: 'Japanese', business_id: menshoTokyo.id)
japaneseTag2 = Tag.create!(label: 'Japanese', business_id: aburaya.id)
ramenTag = Tag.create!(label: 'Ramen', business_id: menshoTokyo.id)
seafoodTag = Tag.create!(label: 'Seafood', business_id: hogIsland.id)
seafoodTag = Tag.create!(label: 'Live/Raw Food', business_id: hogIsland.id)
fastFoodTag = Tag.create!(label: 'Fast Food', business_id: mcdonalds.id)
burgerTag = Tag.create!(label: 'Burgers', business_id: mcdonalds.id)
friedChickenTag = Tag.create!(label: 'Fried Chicken', business_id: aburaya.id)
koreanTag = Tag.create!(label: 'Korean', business_id: tacorea.id)
BurritoTag = Tag.create!(label: 'Burritos', business_id: tacorea.id)
mexicanTag = Tag.create!(label: 'Mexican', business_id: tacorea.id)