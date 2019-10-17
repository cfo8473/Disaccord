class Api::ServersController < ApplicationController
  before_action :require_logged_in

  def index
    if (params[:filter] && params[:filter][:userId])
      @servers = User.find(params[:filter][:userId]).joined_servers
    else
      @servers = Server.all
    end
    render :index

  end

  def show
    @server = Server.find(params[:id])
    render :show
  end

  def create
    @server = Server.new(server_params)
    if @server.save
      @server.setup_server(current_user.id)

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
