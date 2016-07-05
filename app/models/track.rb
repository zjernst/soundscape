class Track < ActiveRecord::Base
  validates :title, :track_url, :soundscape_id, :artist_id, presence: true

  belongs_to :soundscape
  belongs_to :artist, class_name: "User"
  has_many :taggings
  has_many :tags, through: :taggings


  def self.tags(tag_ids, tracks)
    # tags = "(#{tag_ids.join(',')})"
    track.joins(:taggings).where(taggings: {tag_id: tag_ids})
      .group("tracks.id").having("COUNT(taggings.id) = ?", tag_ids.length)
  end

  def self.filter(filters)
    relation = Track
    filtered = false
    if filters[:tags]
      filtered = true
      relation = relation.joins(:taggings).where(taggings: {tag_id: filters[:tags]})
        .group("tracks.id").having("COUNT(taggings.id) = ?", filters[:tags].length)
    end
    if filters[:soundscapes]
      filtered = true
      relation = relation.where(tracks: {soundscape_id: filters[:soundscapes]})
    end
    if filters[:artists]
      filtered = true
      relation = relation.where(tracks: {artist_id: filters[:artists]})
    end
    if filters[:query] && !filters[:query].empty?
      filtered = true
      relation = relation.where(
        [
          'title LIKE :query OR description LIKE :query',
          {query: "%#{filters[:query]}%"}
        ]
      )
    end

    if filtered
      relation
    else
      Track.all
    end
  end



  def self.in_soundscape(soundscape_ids)
    soundscapes = "(#{soundscape_ids.join(',')})"
    tracks = self.find_by_sql(
    "SELECT
    tracks.*
    FROM
    tracks
    WHERE
    tracks.soundscape_id IN #{soundscapes}
    ORDER BY
    tracks.title"
    )
    return tracks
  end

  # tracks = tagging_join.where(tags: {id: tag_ids[0]})
end
