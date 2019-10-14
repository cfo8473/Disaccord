class Api::MembershipsController < ApplicationController
  def create
    @membership = Membership.new
    @membership.user_id = current_user.id

    # if (membership)
  end

  private
  def membership_params
    params.require(:server).permit(:membership_type)
  end
end
