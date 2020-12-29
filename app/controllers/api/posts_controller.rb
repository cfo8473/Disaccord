class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render :index
  end

  def create
    @post = Post.new(post_params)
    if @post.save!
      @icon = Icon.new(image_id: @post.id, membership_type: "User", membership_id: current_user.id)
      @icon.save!
      render json: {message: "Icon uploaded"}
    else
      render json: post.errors.full_messages, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :photo)
  end
end
