Rails.application.routes.draw do
  get 'visitors/home'

  devise_for :users

  devise_scope :user do
    authenticated :user do
      root 'home#index', as: :authenticated_root
    end

    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
      # root 'visitors#home', as: :unauthenticated_root
    end
  end
end
