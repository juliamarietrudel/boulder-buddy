class Gym < ApplicationRecord
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
  has_many :reviews
  validates :name, presence: true
  validates :address, presence: true
  validates :climbing_type, inclusion: { in: ['Boulder', 'Rope'] }
end
