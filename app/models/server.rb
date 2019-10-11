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
end
