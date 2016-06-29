class Track < ActiveRecord::Base
  validates :title, :track_url, :soundscape_id, :artist_id, presence: true
  
  belongs_to :soundscape
  belongs_to :artist
end
