class Api::BusinessesController < ApplicationController

    def create
        @business = Business.new(business_params)

        if @business.save
            render 'api/businesses/show'
        else
            render json: @business.errors.full_messages, status: 422
        end
    end

    def show
        @business = Business.with_attached_photos.find(params[:id]);
    end

    def index
        @businesses = Business.all
    end

    def update
        @business = Business.with_attached_photos.find(params[:id])
        debugger
        @business.photos.attach(business_params[:photos][0])
        if @business.save
            render json: {message: 'it worked'}
        else
            render json: @business.errors.full_messages
        end
    end

    private

    def business_params
        
        params.require(:business).permit(:name, :address, :phone_number, photos: [])
    end
end
