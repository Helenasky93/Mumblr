class Api::PostsController < ApplicationController
    def index
        @posts = Post.all
    end

    def show
        @post = Post.find(params[:id])
    end

    def new
        @post = Post.new
    end

    def create
        @post = Post.new(post_params)
        debugger
        @post.author_id = current_user.id
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        debugger
        @post = Post.find(params[:id])
    
        if @post && @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
        
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
        render :show
    end

    private 

    def post_params
        params.require(:post).permit(:title,:body,:post_type, :file)
        
    end
end
