Rails.application.routes.draw do
  root 'gyms#index'  # This line sets the root path to the index action of GymsController

  resources :gyms do
    collection do
      get :search
    end
    resources :reviews, only: %i[index new create]
  end
end


# THINGS TO DO
  # hover on map and name bold
  # hide comments and deploy when click
