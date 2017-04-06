module Actions
	module Departments
		class Index < Abstract

			def index
				render json: JSONAPI::Serializer.serialize(Department.all, is_collection: true)
			end
			
		end
	end
end