json.extract!(
  track,
  :id, :title, :soundscape_id, :track_url, :artist_id, :description, :location, :rating
)

json.tags do
  json.array!(track.tags) do |tag|
    json.partial! 'api/tags/tag', tag: tag
  end
end
