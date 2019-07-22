class Group < ApplicationRecord
  has_many :members
  has_many :users, through: :members, source: :user
  has_many :messages

  validates :name, presence: true, uniqueness: true
end
