json.array!(@soundscapes) do |soundscape|
  json.partial!('soundscape', soundscape: soundscape, show_tracks: false)
end
