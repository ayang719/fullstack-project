json.extract! review, :id, :author_id, :business_id, :body, :rating
json.user review.author
json.date review.created_at.strftime("%m/%d/%Y")