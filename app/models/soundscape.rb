class Soundscape < ActiveRecord::Base
  validates :title, :image_url, presence: true
  has_many :tracks
end
