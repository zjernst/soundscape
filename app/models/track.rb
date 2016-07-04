class Track < ActiveRecord::Base
  validates :title, :track_url, :soundscape_id, :artist_id, presence: true

  belongs_to :soundscape
  belongs_to :artist, class_name: "User"
  has_many :taggings
  has_many :tags, through: :taggings

  # def self.has_tag(tag_ids)
  #   tagging_join = self.joins(:tags).joins(:tags)
  #   if (tag_ids.length > 1)
  #     tagging_join = tagging_join.joins(:tags).where(tags: {id: tag_ids})
  #   end
  #   return Track.all
  # end

  def self.tag_and_soundscape(tag_ids, soundscape_ids)
    tags = "(#{tag_ids.join(',')})"
    soundscapes = "(#{soundscape_ids.join(',')})"
    number = tag_ids.length
    tracks = self.find_by_sql(
    "SELECT
    tracks.*
    FROM
    tracks
    JOIN
    taggings
    ON
    taggings.track_id = tracks.id
    WHERE
    taggings.tag_id IN #{tags} AND tracks.soundscape_id IN #{soundscapes}
    GROUP BY
    tracks.id
    HAVING
    COUNT(taggings.id) = #{number}
    ORDER BY
    tracks.title
    ")
    return tracks
  end

  def self.has_tag(tag_ids)
    tags = "(#{tag_ids.join(',')})"
    number = tag_ids.length
    tracks = self.find_by_sql(
    "SELECT
    tracks.*
    FROM
    tracks
    JOIN
    taggings
    ON
    taggings.track_id = tracks.id
    WHERE
    taggings.tag_id IN #{tags}
    GROUP BY
    tracks.id
    HAVING
    COUNT(taggings.id) = #{number}
    ORDER BY
    tracks.title
    ")
    return tracks
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
