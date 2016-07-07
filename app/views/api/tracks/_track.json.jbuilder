json.extract!(
  track,
  :id, :title, :soundscape_id, :track_url, :artist_id,
  :description, :location, :rating
)


json.artist track.artist.username


# json.artist @track.artist, :username


if show_tags
  json.tags do
    json.array!(track.tags) do |tag|
      json.partial! 'api/tags/tag', tag: tag, show_tracks: false
    end
  end
end
