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
    resource :projects
    resources :projects do
      # TODO hook from jira
      resources :members
      resource :sprints do
        get 'report' # TODO pdf and html format
        post 'reload'
        resource :member_details
        # resource :exceptense_criteria
      end
    end
    resource :developers
    resource :department
  end

end
