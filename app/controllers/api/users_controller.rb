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

    private 

    def user_params
        params.require(:user).permit(:username, :password, :email)
    end
end
