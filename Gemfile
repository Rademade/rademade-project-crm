source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.1'
gem 'dry-system-rails'

# Use Puma as the app server
gem 'puma', '~> 3.7'

gem 'jira-ruby', :require => 'jira-ruby'
# gem 'ruby-freshbooks', require: false
gem 'freshbooks_client', github: 'andrey-abramow/freshbooks_client'
gem 'rademade_admin', github: 'Rademade/rademade_admin', branch: 'feature/rails-5'
gem 'pg'

gem 'togglv8' 
gem 'rabl'
# Also add either `oj` or `yajl-ruby` as the JSON parser
gem 'oj'
group :development, :test do
  gem 'dotenv-rails'
  gem 'brakeman' 
  gem 'awesome_rails_console'
  gem 'hirb'
  gem 'pry'
  gem 'pry-byebug'
  gem 'annotate', git: 'https://github.com/ctran/annotate_models.git'
  gem 'rspec-rails', '~> 3.5'
end

group :development do
  gem 'web-console', '~> 2.0'
  gem 'mina', '~>1.0.0'
  gem 'mina-npm'
  gem 'mina-puma'
end
