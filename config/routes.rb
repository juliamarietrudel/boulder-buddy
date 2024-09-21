# Rails.application.routes.draw do
#   # gym
#   get '/gyms', to: 'gyms#index'
#   get '/gyms/new', to: 'gyms#new', as: :new
#   get '/gyms/:id', to: 'gyms#show', as: :gym
#   post '/gyms', to: 'gyms#create'
#   get '/gyms/:id/edit', to: 'gyms#edit', as: :edit
#   patch '/gyms/:id', to: 'gyms#update'
#   delete '/gyms/:id', to: 'gyms#destroy'

#   # reviews
#   get '/gyms/:gym_id/reviews', to: 'reviews#index', as: :gym_reviews
#   get 'gyms/:gym_id/reviews/new', to: 'reviews#new', as: :new_gym_review
#   post '/gyms/:gym_id/reviews', to: 'reviews#create'
# end

Rails.application.routes.draw do
  resources :gyms do
    collection do
      get :search
    end
    resources :reviews, only: %w[index new create], as: :reviews
  end
end



# THINGS TO DO
  # hover on map and name bold
  # hide comments and deploy when click
