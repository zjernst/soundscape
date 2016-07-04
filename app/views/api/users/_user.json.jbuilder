json.extract! user, :id, :username, :profile_pic

if show_tracks
  json.tracks do
    json.array!(user.tracks) do |track|
      json.partial! 'api/tracks/track', track: track, show_tags: true
    end
  end
end
