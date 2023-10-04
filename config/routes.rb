Rails.application.routes.draw do
  resources :visits
  resources :visitors do
    collection do
      get 'check_visitor'
    end
  end
  resources :sectors
  resources :divisions


  # devise_for :users
  devise_for :user, :path => '', :path_names => { :sign_in => "login", :sign_out => "logout", :sign_up => "register" }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "visits#index"
end
