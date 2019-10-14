# == Schema Information
#
# Table name: role_channels
#
#  id         :bigint           not null, primary key
#  role_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class RoleChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
