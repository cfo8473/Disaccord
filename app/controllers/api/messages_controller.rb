class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all
    render :index
  end
 
  def create
    @message = Message.new(message_params)
    # debugger
    if @message.save!
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def update
    @message = Message.find(params[:id])
    if @message.update_attributes(message_params)
      render :show
    else
      render json: @message.errors.full_messages, status:422
    end
  end

  def destroy
    @message = Message.find(params[:id])
    if @message.update_attributes(message_params)
      render :show
    else
      render json: @message.errors.full_messages, status:422
    end
  end


  private
  def message_params
    params.require(:message).permit(:body, :author_id, :channel_id, :pinned)
  end
end
