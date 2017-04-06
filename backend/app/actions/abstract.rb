module Actions
	module Projects
		class Abstract
			
			extend Forwardable
			
			def_delegators :@controller, :render, :params
			
			def initialize(controller)
		    @controller = controller
			end
			
		end
	end
end