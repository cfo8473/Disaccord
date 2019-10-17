# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  admin_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Server < ApplicationRecord
  validates :title, presence: true, uniqueness: true
  validates :admin_id, presence: true

  belongs_to :admin,
    foreign_key: :admin_id,
    class_name: :User

  has_many :memberships, as: :membership

  has_many :roles,
    foreign_key: :server_id,
    class_name: :Role 
  
  has_many :channels,
    foreign_key: :server_id,
    class_name: :Channel

  has_many :icon_memberships

  def setup_server(user)
    serverMembership = Membership.new(user_id: user, membership_id: self.id, membership_type: "Server")
    serverMembership.save!
    channel = self.channels.create(title: "General", topic: "Default topic!")
    channel.save!
    channelMembership = Membership.new(user_id: user, membership_id: channel.id, membership_type: "Channel")
    channelMembership.save!
    role = Role.new(title: "Owner", permissions: 0, color: "Red", server_id: self.id)
    role.save!
    userRole = UserRole.new(user_id: user, role_id: role.id)
    userRole.save!
  end

  

    
end
