class Api::MembershipsController < ApplicationController
  def index
    @memberships = Membership.all
    render :index
  end
 
  def create
    @membership = Membership.new(membership_params)
    @membership.user_id = current_user.id
    
    if @membership.save
      render :show
    else
      render json: @membership.errors.full_messages, status: 422
    end


  end

  def destroy
    @membership = Membership.find(params[:id])
    if @membership.update_attributes(membership_params)
      render :show
    else
      render json: @membership.errors.full_messages, status:422
    end
  end

  private
  def membership_params
    params.require(:server).permit(:membership_type)
  end
end
