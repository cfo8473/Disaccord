# == Schema Information
#
# Table name: user_roles
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  role_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class UserRole < ApplicationRecord
  validates :user_id, :role_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :role,
    foreign_key: :role_id,
    class_name: :Role

  
end
