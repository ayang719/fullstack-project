Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :businesses, only: [:create, :show, :index, :update] do
      resources :reviews, only: [:create, :index, :show]
    end
    resources :reviews, only: [:delete]
  end

  root "static_pages#root"
end
