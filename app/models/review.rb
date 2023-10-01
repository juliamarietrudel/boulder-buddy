class Review < ApplicationRecord
  belongs_to :gym
  validates :rating, presence: true
  validates :comment, presence: true
  validates :user, presence: true
end
