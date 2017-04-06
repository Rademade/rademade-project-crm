module Actions
	module Projects
		class Index < Abstract

      # TODO add params validation with exceptions
			def index
				render json: JSONAPI::Serializer.serialize(Project.all, is_collection: true)
			end
			
		end
	end
end