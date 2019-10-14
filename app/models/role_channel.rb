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

class RoleChannel < ApplicationRecord
  validates :role_id, :channel_id, presence: true

  has_many :roles,
    foreign_key: :role_id,
    class_name: :Role
  
  has_one :channel,
    foreign_key: :channel_id,
    class_name: :Channel
end
