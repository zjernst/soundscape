json.array!(@tracks) do |track|
  json.partial!('track', track: track, show_tags: true)
end
