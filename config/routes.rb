Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users
    resources :posts
    resources :likes, only: [:index, :show, :create, :destroy]
    resources :follows, only: [:index, :show, :create, :destroy]
    resource :session, only: [:new, :create, :destroy]
  end
  root "static_pages#root"
end
