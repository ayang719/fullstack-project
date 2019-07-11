class Api::TagsController < ApplicationController

    def create
        @tag = Tag.new(tag_params)
        unless @tag.save
            render json: @tag.errors.full_messages, status: 422 
        end
    end

    private
    def tag_params
        params.require(:tag).permit(:label, :business_id)
    end
end
