# == Schema Information
#
# Table name: memberships
#
#  id              :bigint           not null, primary key
#  user_id         :integer          not null
#  membership_type :string           not null
#  membership_id   :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Membership < ApplicationRecord
  validates :user_id, :membership_id, :membership_type, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :membership,
    polymorphic: true

end
