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

class Icon < ApplicationRecord
  # validates :image_id, :icon_membership_id, :icon_membership_type, presence: true

  # belongs_to :image,
  #   foreign_key: :image_id,
  #   class_name: :Post

  # belongs_to :icon_membership,
  #   polymorphic: true
end
