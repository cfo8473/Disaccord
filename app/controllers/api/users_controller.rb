class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    
    if @user.save
      # server = Server.new(title: "#{@user.username}-general", admin_id: @user.id)
        
      # server.save
      # server.setup_server(@user.id)

      @user.default_server(@user);
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end 

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status:422
    end

  end

  def show
    @User = User.find(params[:id])
    render :show
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :photo)
  end
end
