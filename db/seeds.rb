# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({username: 'Charizard', password: 'password'})
User.create({username: 'Blastoise', password: 'password'})
User.create({username: 'Venusaur', password: 'password'})
User.create({username: 'Pidgeotto', password: 'password'})
User.create({username: 'Butterfree', password: 'password'})
User.create({username: 'Snorlax', password: 'password'})

Soundscape.create({title: 'rain', image_url: 'http://webneel.com/wallpaper/sites/default/files/images/04-2013/cute-rain-in-mirror.jpg'})
Soundscape.create({title: 'waves', image_url: 'http://www.wallpapersdb.org/wallpapers/beach/golden_beach_and_waves_1920x1200.jpg'})
Soundscape.create({title: 'wind', image_url: 'http://www.tantrumkitesurf.com/wp-content/uploads/2012/12/wind.jpg'})
Soundscape.create({title: 'city', image_url: 'https://wallpaperscraft.com/image/city_skyscrapers_night_light_road_62141_3840x2160.jpg'})
Soundscape.create({title: 'forest', image_url: 'https://static.pexels.com/photos/1826/wood-nature-sunny-forest.jpg'})
Soundscape.create({title: 'home', image_url: 'http://s.shld.net/is/image/Sears/s_025CO66554812B-qm-$cq_width_160$-qm-$cq_width_250$'})
Soundscape.create({title: 'fire', image_url: 'http://www.win10themes.com/wp-content/uploads/2016/01/Fireplace-Wallpaper-Images.png'})
Soundscape.create({title: 'cafe', image_url: 'http://www.atlascafe.net/images/02.jpg'})

Track.create({title: 'rainy day', track_url: 'rain.mp3', soundscape_id: 1, artist_id: 2})
Track.create({title: 'stormy night', track_url: 'storms.mp3', soundscape_id: 1, artist_id: 1})
Track.create({title: 'beach day', track_url: 'waves.mp3', soundscape_id: 2, artist_id: 2})
Track.create({title: 'windy midwest', track_url: 'breezey.mp3', soundscape_id: 3, artist_id: 4})
Track.create({title: 'around town', track_url: 'busy.mp3', soundscape_id: 4, artist_id: 1})
Track.create({title: 'viridian forest', track_url: 'route3.mp3', soundscape_id: 5, artist_id: 5})
Track.create({title: 'trees', track_url: 'tress.mp3', soundscape_id: 5, artist_id: 3})
Track.create({title: 'home sweet home', track_url: 'home.mp3', soundscape_id: 6, artist_id: 1})
Track.create({title: 'flickering flame', track_url: 'fire.mp3', soundscape_id: 7, artist_id: 1})
Track.create({title: 'coffee', track_url: 'coffee.mp3', soundscape_id: 8, artist_id: 3})
