Rails.application.routes.draw do

  mount Ckeditor::Engine => '/ckeditor'
  mount RademadeAdmin::Engine => '/admin'
  namespace :rademade_admin, path: 'admin' do
    # admin_resources :departments
    # admin_resources :developers
    # admin_resources :projects do
    #
    # end
    # admin_resources :project_member
    # admin_resources :project_member
  end

  namespace :api, defaults: { format: 'json' } do
    resources :projects, only: [:index, :show, :create, :update, :destroy] do
      # TODO hook from jira
      resource :sprints do
        get 'report' # TODO pdf and html format
        post 'reload'
        resource :member_details
        # resource :exceptense_criteria
      end
    end

    scope module: :project do
      resources :sprints, only: [:index, :show, :update]
    end
    
    namespace :jira_hooks do
      resources :sprint_closed, only: :create 
    end
    
    resources :developers
    resources :departments
  end

end
