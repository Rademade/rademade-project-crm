module Actions
	module Departments
		class Show < Abstract
			
			def show
				render json: JSONAPI::Serializer.serialize(Department.find(params[:id]))
			end
			
		end
	end
end