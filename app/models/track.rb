class Track < ActiveRecord::Base
  validates :title, :track_url, :soundscape_id, :artist_id, presence: true

  belongs_to :soundscape
  belongs_to :artist, class_name: "User"
  has_many :taggings
  has_many :tags, through: :taggings

  def self.has_tag(tag_id)
    tagging_join = self.joins(:tags)
    tracks_with_tags = tagging_join.where(tags: {id: tag_id})
    return tracks_with_tags
  end

  def self.has_all_tags(tag_ids)
    tag_ids.each do |tag|
  end
end
