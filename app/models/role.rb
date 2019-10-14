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

class Role < ApplicationRecord
  validates :title, :color, :permissions, :server_id, presence: true

  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server

end
