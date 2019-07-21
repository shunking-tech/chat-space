class Group < ApplicationRecord
  has_many :members
  has_many :users, through: :members, source: :user
  validates :name, presence: true, uniqueness: true
end
