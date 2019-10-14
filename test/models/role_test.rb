# == Schema Information
#
# Table name: roles
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  color       :string           not null
#  permissions :integer          not null
#  server_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class RoleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
