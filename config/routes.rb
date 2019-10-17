Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resources :users, only: [:index, :show, :update, :destroy]
    resource :session, only: [:create, :destroy, :show]
    resources :servers, only: [:index, :show, :create, :update, :destroy] do
      resources :memberships, only: [:index, :create, :destroy]

      
      
    end
    resources :posts, only: [:show, :create]

    resources :channels, only: [:index, :show, :create, :update, :destroy] do
      resources :memberships, only: [:index, :create, :destroy]
      
    end
    

    resources :messages, only: [:index, :create, :destroy]

  end
end
