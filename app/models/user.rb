# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :session_token, :email, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  
  after_initialize :ensure_session_token
  attr_reader :password

  has_many :owned_servers,
    foreign_key: :admin_id,
    class_name: :Server,
    dependent: :destroy
  
  has_many :memberships

  has_many :joined_servers, 
    through: :memberships,
    source: :membership,
    source_type: :Server

  has_many :joined_channels,
    through: :memberships,
    source: :membership,
    source_type: :Channel

  has_many :userRoles,
    foreign_key: :user_id,
    class_name: :UserRole

  has_many :messages,
    foreign_key: :author_id,
    class_name: :Message


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end
