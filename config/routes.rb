Rails.application.routes.draw do
  get 'messages/chat_room'

  get 'visitors/home'

  devise_for :users

  devise_scope :user do
    authenticated :user do
      root 'messages#chat_room', as: :authenticated_root
    end

    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
      # root 'visitors#home', as: :unauthenticated_root
    end
  end

  resources :messages, only: [:chat_room, :create]
end
