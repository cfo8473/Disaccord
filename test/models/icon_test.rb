# == Schema Information
#
# Table name: icons
#
#  id                   :bigint           not null, primary key
#  image_id             :integer          not null
#  icon_membership_type :string           not null
#  icon_membership_id   :integer          not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

require 'test_helper'

class IconTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
