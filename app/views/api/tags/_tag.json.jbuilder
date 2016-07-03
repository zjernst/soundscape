json.extract!(
  tag,
  :id, :name
)

if show_tracks
  json.tracks do
    json.array!(tag.tracks) do |track|
      json.partial! 'api/tracks/track', track: track, show_tags: false
    end
  end
end
