class ApplicationController < ActionController::Base
    before_action :authenticate_user!
    # before_action :configure_permitted_parameters, if: :devise_controller?

    # protected
  
    # def configure_permitted_parameters
    #   devise_parameter_sanitizer.permit(:sign_up, keys: [:display_name])
    # end

    before_action :configure_permitted_parameters, if: :devise_controller?

    
    rescue_from CanCan::AccessDenied do
      redirect_to '/visits'
    end
    protected
  
    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :role])
    end
end
