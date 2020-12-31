class Api::UsersController < ApplicationController
    # skip_before_action :verify_authenticity_token

    def index
        @users = User.all
    end

    def create
        @user = User.new(user_params)
        @user.avatar = "cloud"

        if @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def update
       
        @user = User.find(params[:id])
        p @user
        p user_params
        if @user && @user.update(user_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    private 

    def user_params
        params.require(:user).permit(:username, :password, :email, :profile_picture)
    end
end
