class Api::PostsController < ApplicationController
    def index
        
    end

    def show
        
    end

    def new
        
    end

    def create
        
    end

    def update
        
    end

    def destroy
        
    end

    private 

    def post_params
        params.require(:post).permit(:title,:body,:)
    end
end
