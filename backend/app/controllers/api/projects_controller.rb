class Api::ProjectsController < ApplicationController

  def show
    render json: { id: 1, name: 'Health24' }
  end

  def index
    render json: [{ id: 1, name: 'Health24' }]
  end

end
