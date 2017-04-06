module Actions
	module Projects
		class Show < Abstract
			
			def show
				render json: JSONAPI::Serializer.serialize(Project.find(params[:id]))
			end
			
		end
	end
end