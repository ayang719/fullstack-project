# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Business.destroy_all
Review.destroy_all
Tag.destroy_all

demoUser = User.create!(name: 'Demo User', email: 'kelpman@gmail.com', password: 'password')
user1 = User.create!(name: 'Alex Yang', email: 'ayang719@gmail.com', password: 'password')
user2 = User.create!(name: "Paul Cho", email: 'pcho@asauna.com', password: 'imascrub')
user3 = User.create!(name: 'David Song', email: 'dsong@yollow.com', password: 'imhellaweak')
user4 = User.create!(name: 'Emarson Serrano', email: 'eserrano@revw.com', password:'myreviewplatformisbetter')
user5 = User.create!(name: 'Chris Gee', email: 'chrisgee@chris.com', password: 'chirsgee')
user6 = User.create!(name: 'Kenny Choi', email: 'kenny@airbnbplus.com', password: 'whydopeoplekeepaskingmeforhelp')

mcdonalds = Business.create!({name: "McDonald's", address: '235 N Front St, San Francisco, CA 94111', phone_number: '415-397-6333', lat: '37.793898', lng: '-122.399094'});
hogIsland = Business.create!({name: "Hog Island Oyster Co", address: 'Ferry Building, San Francisco, CA 94111', phone_number: '415-391-7117', lat: '37.796055', lng: '-122.393597'});
menshoTokyo = Business.create!({name: 'Mensho Tokyo', address: '672 Geary St San Francisco, CA 94102', phone_number:'415-800-8345', lat:'37.786763', lng: '-122.414339'})
aburaya = Business.create!( name: 'Aburaya Japanese Fried Chicken', address: '362 17th St, Oakland, CA 94612', phone_number: '510-502-7743', lat:'37.806096', lng: '-122.267576')
tacorea = Business.create!(name: 'Tacorea', address: '809 Bush St, San Francisco, CA 94108', phone_number: '415-885-1325', lat: '37.789844', lng: '-122.410693')
cheeseBoard = Business.create!(name: 'Cheese Board Pizza', address: '1512 Shattuck Ave, Berkeley, CA 94709', phone_number: '510-549-3183', lat: '37.880070', lng: '-122.269462')
barbara = Business.create!(name: "Barbara's Fishtrap", address: '281 Capistrano Rd, Half Moon Bay, CA, 94019', phone_number: '650-728-7049', lat: '37.503484', lng: '-122.485081')
donut = Business.create!(name: "Bob's Donut & Pastry Shop", address: '1621 Polk St, San Francisco, CA 94109', phone_number: '415-776-3141', lat: '37.791915', lng: '-122.421204')

oiistar = Business.create!(name: 'Oiistar', address: '385 N Milwauke Ave, Chicago, IL 60622', phone_number: '773-360-8791', lat: '41.907111', lng: '-87.672097')
portillo = Business.create!(name: "Portillo's Hot Dogs", address: '520 W Taylor St, Chicago, IL, 60607', phone_number: '312-667-4560', lat: '41.870344', lng: '-87.640192')
cheval = Business.create!(name: 'Au Cheval', address: '800 W Randolph St, Chicago, IL, 60607', phone_number: '312-929-4580', lat: '41.884635', lng: '-87.647586')
rice = Business.create!(name: 'Fat Rice', address: '2957 W Diversey Ave, Chicago, IL, 60647', phone_number: '773-661-9170', lat: '41.931951', lng: ' -87.702368')

rice.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/fr1.jpg'), filename: 'fr1.jpg')
rice.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/fr2.jpg'), filename: 'fr2.jpg')
rice.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/fr3.jpg'), filename: 'fr3.jpg')

cheval.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/au1.jpg'), filename: 'au1.jpg')
cheval.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/au2.jpg'), filename: 'au2.jpg')
cheval.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/au3.jpg'), filename: 'au3.jpg')

portillo.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/port1.jpg'), filename: 'port1.jpg')
portillo.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/port2.jpg'), filename: 'port2.jpg')
portillo.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/port3.jpg'), filename: 'port3.jpg')

oiistar.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/oii1.jpg'), filename: 'oii1.jpg')
oiistar.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/oii2.jpg'), filename: 'oii2.jpg')
oiistar.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/oii3.jpg'), filename: 'oii3.jpg')

donut.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/donut1.jpg'), filename: 'donut1.jpg')
donut.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/donut2.jpg'), filename: 'donut2.jpg')
donut.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/donut3.jpg'), filename: 'donut3.jpg')

barbara.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/bbft1.jpg'), filename: 'bbft1.jpg')
barbara.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/bbft2.jpg'), filename: 'bbft2.jpg')
barbara.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/bbft3.jpg'), filename: 'bbft3.jpg')

cheeseBoard.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/cb1.jpg'), filename: 'cb1.jpg')
cheeseBoard.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/cb2.jpg'), filename: 'cb2.jpg')
cheeseBoard.photos.attach(io: open('https://kelpp-seed.s3-us-west-1.amazonaws.com/cb3.jpg'), filename: 'cb3.jpg')

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

rr1 = Review.create!(author_id: user5.id, business_id: rice.id, rating: 4, body: 'Food was awesome! Loved the spin they put on Portuguese cuisine here.')
rr2 = Review.create!(author_id: user3.id, business_id: rice.id, rating: 3, body: 'I enjoyed my meal but felt a little overpriced.')
rr3 = Review.create!(author_id: user4.id, business_id: rice.id, rating: 5, body: 'We ordered the pork and ginger dumplings and wow they are absolutely delicious.')
rr4 = Review.create!(author_id: user2.id, business_id: rice.id, rating: 4, body: 'Like other reviewers, I thought this place was good, but not good enough to be worth the price point.')


aur1 = Review.create!(author_id: user4.id, business_id: cheval.id, rating: 5, body: "This place has probably one of the best burgers I've ever had")
aur2 = Review.create!(author_id: user3.id, business_id: cheval.id, rating: 5, body: "I've heard people say this is the best burger but I didn't believe it til I actually experienced it. ")
aur3 = Review.create!(author_id: user6.id, business_id: cheval.id, rating: 4, body: "Delicious food, the fries are great")
aur4 = Review.create!(author_id: user2.id, business_id: cheval.id, rating: 4, body: "Pretty decent food")

ptr1 = Review.create!(author_id: user2.id, business_id: portillo.id, rating: 5, body: 'Good Hotdogs but the best thing here is the Italian beef. THe cheese fries are also super delicious')
ptr2 = Review.create!(author_id: user5.id, business_id: portillo.id, rating: 4, body: "I've definitely had better hotdogs but these are still super good along with everything else on the menu")
ptr3 = Review.create!(author_id: user3.id, business_id: portillo.id, rating: 3, body: 'Terrible service, everyone just seemed rushed, food was okay')

or1 = Review.create!(author_id: user1.id, business_id: oiistar.id, rating: 5, body: "Great Ramen and the buns are good too. Some of the better Ramen in the city")
or2 = Review.create!(author_id: user4.id, business_id: oiistar.id, rating: 4, body: "Really good ramen, but not the best. There is better in Chicago")
or3 = Review.create!(author_id: user3.id, business_id: oiistar.id, rating: 3, body: "A bit too rich for me")
or4 = Review.create!(author_id: user5.id, business_id: oiistar.id, rating: 5, body: "Really good ramen!")

dr1 = Review.create!(author_id: user6.id, business_id: donut.id, rating: 5, body: 'Love the donuts. The bigger the better!')
dr1 = Review.create!(author_id: user3.id, business_id: donut.id, rating: 3, body: 'Everything here is great')
dr1 = Review.create!(author_id: user5.id, business_id: donut.id, rating: 4, body: 'Apple fritters are bomb')

br1 = Review.create!(author_id: user5.id, business_id: barbara.id, rating: 5, body: 'Best clam chowder in the world!!')
br2 = Review.create!(author_id: user2.id, business_id: barbara.id, rating: 4, body: 'Really fresh seafood and cooked well')
br3 = Review.create!(author_id: user3.id, business_id: barbara.id, rating: 5, body: 'Love the calamari')
br4 = Review.create!(author_id: user4.id, business_id: barbara.id, rating: 5, body: 'Everything is great')

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


chineseTag = Tag.create!(label: 'Chinese', business_id: rice.id)
portugueseTag = Tag.create!(label: 'Portuguese', business_id: rice.id)
americanTag = Tag.create!(label: 'American', business_id: cheval.id)
japaneseTag = Tag.create!(label: 'Japanese', business_id: menshoTokyo.id)
japaneseTag2 = Tag.create!(label: 'Japanese', business_id: aburaya.id)
japaneseTag3 = Tag.create!(label: 'Japanese', business_id: oiistar.id)
ramenTag = Tag.create!(label: 'Ramen', business_id: menshoTokyo.id)
ramenTag2 = Tag.create!(label: 'Ramen', business_id: oiistar.id)
seafoodTag = Tag.create!(label: 'Seafood', business_id: hogIsland.id)
seafoodTag = Tag.create!(label: 'Seafood', business_id: barbara.id)
seafoodTag = Tag.create!(label: 'Live/Raw Food', business_id: hogIsland.id)
saladTag = Tag.create!(label: 'Salad', business_id: portillo.id)
fastFoodTag = Tag.create!(label: 'Fast Food', business_id: mcdonalds.id)
hotDogTag = Tag.create!(label: 'Hot Dogs', business_id: portillo.id)
burgerTag = Tag.create!(label: 'Burgers', business_id: mcdonalds.id)
burgerTag2 = Tag.create!(label: 'Burgers', business_id: portillo.id)
burgerTag3 = Tag.create!(label: 'Burgers', business_id: cheval.id)
friedChickenTag = Tag.create!(label: 'Fried Chicken', business_id: aburaya.id)
koreanTag = Tag.create!(label: 'Korean', business_id: tacorea.id)
BurritoTag = Tag.create!(label: 'Burritos', business_id: tacorea.id)
mexicanTag = Tag.create!(label: 'Mexican', business_id: tacorea.id)
bakeryTag = Tag.create!(label: 'Bakeries', business_id: donut.id)
donutTag = Tag.create!(label: 'Donuts', business_id: donut.id)
pizzaTag = Tag.create!(label: 'Pizza', business_id: cheeseBoard.id)