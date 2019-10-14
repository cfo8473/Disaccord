class Api::ServersController < ApplicationController
  before_action :require_logged_in

  def index
    @servers = Server.all
    render :index
  end

  def show
    @server = Server.find(params[:id])
    render :index
  end

  def create
    @server = Server.new(server_params)
    
    if @server.save
      @membership = Membership.new(user_id: current_user.id, membership_id: @server.id, membership_type: "Server")
  
      @membership.save!
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    @server = Server.find(params[:id])
    if @server.update_attributes(server_params)
      render :show
    else
      render json: @server.errors.full_messages, status:422
    end

  end

  def destroy
    @server = Server.find(params[:id])
    @server.destroy
  end

  private
  def server_params
    params.require(:server).permit(:title, :admin_id)
  end
end
