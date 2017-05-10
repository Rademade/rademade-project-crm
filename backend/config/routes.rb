Rails.application.routes.draw do

  mount Ckeditor::Engine => '/ckeditor'
  mount RademadeAdmin::Engine => '/admin'
  namespace :rademade_admin, path: 'admin' do
    admin_resources :departments
    admin_resources :developers
    admin_resources :projects do
     
    end
    # admin_resources :project_member
    # admin_resources :project_member
  end

  namespace :api, defaults: { format: 'json' } do
    resources :projects, only: [:index, :show, :create, :update] do
      # TODO hook from jira
      resource :sprints do
        get 'report' # TODO pdf and html format
        post 'reload'
        resource :member_details
        # resource :exceptense_criteria
      end
    end
    resources :developers
    resources :departments
  end

end
