require 'mina/rails'
require 'mina/git'
require 'mina/deploy'
require 'mina/bundler'
require 'mina/rvm'
require 'mina/npm'

set :application_name, 'rademade_crm'
set :port, 4002
set :domain, 'vm.rademade.com'
set :deploy_to, '/home/rademade-crm/website-backend'
set :repository, 'git@github.com:Rademade/rademade-project-crm.git'
set :branch, 'refactoring_forms'
set :shared_paths, ['log']
set :user, 'rademade-crm'

ruby_version = File.read(File.join __dir__, '../.ruby-version').chomp
ruby_gemset = File.read(File.join __dir__, '../.ruby-gemset').chomp

task :environment do
  invoke :"rvm:use[#{ruby_version}@#{ruby_gemset}]"
  queue 'export RAILS_ENV=production'
end

task setup: :environment do
  queue %[rvm install "ruby-2.4.0"]
  queue %[mkdir -p "#{deploy_to}/#{shared_path}/log"]
  queue %[mkdir -p "#{deploy_to}/#{shared_path}/config"]
end

namespace :npm do
  desc 'Install node modules using npm'
  task :install_fixed do
    queue %{(
      echo '-----> Installing node modules using npm'
      sub_directory=$(pwd | sed -r "s/.*?$(basename $build_path)//g")
      cd frontend
      #{echo_cmd %[mkdir -p "#{deploy_to}/#{shared_path}$sub_directory/node_modules"]}
      #{echo_cmd %[ln -s "#{deploy_to}/#{shared_path}$sub_directory/node_modules" 'node_modules']}
      #{echo_cmd %[#{fetch(:npm_bin)} install #{fetch(:npm_options)}]}
    )}
  end
end

desc 'Build Frontend'
task :build_frontend do
  invoke :'npm:install_fixed'
  queue %{(
    cd frontend
    #{echo_cmd %[npm run deploy]}
  )}
end

desc "Deploys the current version to the server."

task :deploy do
  deploy do
    invoke :'git:clone'
    invoke :'deploy:link_shared_paths'
    invoke :'bundle:install'
    invoke :'rails:db_migrate'
    invoke :'deploy:cleanup'
    invoke :build_frontend
    on :launch do
      invoke :'deploy:cleanup'
      queue "touch #{deploy_to}/#{current_path}/tmp/restart.txt"
      end
    end
end
