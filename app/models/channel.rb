# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  topic      :string           not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ApplicationRecord
  validates :title, :topic, :server_id, presence: true
  
  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server

  has_many :memberships, as: :membership

end
