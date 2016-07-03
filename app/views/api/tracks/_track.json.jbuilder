json.extract!(
  track,
  :id, :title, :soundscape_id, :track_url, :artist_id, :description, :location, :rating
)

if show_tags
  json.tags do
    json.array!(track.tags) do |tag|
      json.partial! 'api/tags/tag', tag: tag, show_tracks: false
    end
  end
end
