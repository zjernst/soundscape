json.extract!(
  soundscape,
  :id, :title, :image_url, :description
)

if show_tracks
  json.tracks do
    json.array!(soundscape.tracks) do |track|
      json.partial! 'api/tracks/track', track: track, show_tags: true
    end
  end
end
