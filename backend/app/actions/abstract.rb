module Actions
  class Abstract

    extend Forwardable

    def_delegators :@controller, :render, :params

    def initialize(controller)
      @controller = controller
    end

  end
end