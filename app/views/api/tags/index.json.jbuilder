json.array!(@tags) do |tag|
  json.partial!('tag', tag: tag, show_tracks: false)
end
