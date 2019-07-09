class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)
        @review.author_id = current_user.id
        @review.business_id = params[:business_id]

        if @review.save
            render "api/reviews/show"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show
        @review = Review.find(params[:id])
    end


    def index
        @reviews = Business.find(params[:business_id]).reviews
    end

    private

    def review_params
        params.require(:review).permit(:body, :rating)
    end
end
