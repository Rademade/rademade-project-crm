require 'mina/rails'
require 'mina/git'
require 'mina/deploy'
require 'mina/bundler'
require 'mina/rvm'
require 'mina/npm'

set :application_name, 'rademade_crm'
set :port, 4002
set :rvm_path, '~/.rvm/scripts/rvm'
set :forward_agent, true
set :domain, 'vm.rademade.com'
set :deploy_to, '/home/rademade-crm/website-backend'
set :repository, 'git@github.com:Rademade/rademade-project-crm.git'
set :branch, 'feature/deploy'
set :shared_paths, ['log']
set :user, 'rademade-crm'

ruby_version = File.read(File.join __dir__, '../.ruby-version').chomp
ruby_gemset = File.read(File.join __dir__, '../.ruby-gemset').chomp

task :environment do
  command "~/.rvm/scripts/rvm use #{ruby_version}@#{ruby_gemset}"
  command '. ~/.bash_profile'
end

task :setup do
  command %[
    if ! [ -e ~/.rvm/scripts/rvm ]; then
      gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
      curl -sSL https://get.rvm.io | bash -s stable
    fi
  ]
  command %(
    if ! ~/.rvm/bin/rvm list | fgrep '#{ruby_version}'; then
      ~/.rvm/bin/rvm install '#{ruby_version}'
    fi
  )
  invoke :environment
  command %(gem list ^bundler$ -i || gem install bundler)
end

task :deploy do
  invoke :environment

  deploy do
    invoke :'git:clone'
    invoke :'deploy:link_shared_paths'
    in_path('backend') do
      command 'bundle install'
      invoke :'rails:db_migrate'
    end
    invoke :'deploy:cleanup'
    #
    in_path('frontend') do
      command 'npm install'
      command 'npm run deploy'
    end

    on :launch do
      # command "touch #{fetch(:deploy_to)}/#{fetch(:current_path)}/tmp/restart.txt"
    end
  end
end
