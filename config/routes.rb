Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :servers, only: [:index, :show, :create, :update, :destroy] do
      resources :memberships, only: [:index, :create, :destroy]
      resource :channel, only: [:index, :show, :create, :update, :destroy]
    end

  end
end
