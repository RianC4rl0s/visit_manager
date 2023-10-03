class MainController < ApplicationController
    def index
        respond_to do |format|
          format.html {
            # Render your HTML template here if needed
          }
          format.json {
            # Render JSON response here
            render json: { key: 'value' }
          }
        end
    end
end