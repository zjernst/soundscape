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

Soundscape.create({title: 'rain', image_url: 'http://res.cloudinary.com/soundscape/image/upload/c_crop,h_310,w_330/v1467311173/logo_sqngrs.png'})
Soundscape.create({title: 'waves', image_url: 'http://res.cloudinary.com/soundscape/image/upload/v1467310749/waves_logo.png'})
Soundscape.create({title: 'wind', image_url: 'http://res.cloudinary.com/soundscape/image/upload/c_crop,h_250/v1467311170/logo_1_t2yfgn.png'})
Soundscape.create({title: 'city', image_url: 'http://res.cloudinary.com/soundscape/image/upload/c_crop,h_225/v1467311166/logo_3_kaby3y.png'})
Soundscape.create({title: 'forest', image_url: 'http://res.cloudinary.com/soundscape/image/upload/c_crop,h_360/v1467311162/logo_4_axnjxa.png'})
Soundscape.create({title: 'home', image_url: 'http://res.cloudinary.com/soundscape/image/upload/c_crop,h_310/v1467311155/logo_6_bqqnfp.png'})
Soundscape.create({title: 'fire', image_url: 'http://res.cloudinary.com/soundscape/image/upload/c_crop,h_370/v1467311158/logo_5_kptop2.png'})
Soundscape.create({title: 'cafe', image_url: 'http://res.cloudinary.com/soundscape/image/upload/c_crop,h_310,w_350/v1467311151/logo_8_qqdcng.png'})

Track.create({title: 'rainy day', track_url: 'http://res.cloudinary.com/soundscape/video/upload/v1467321148/Allegro_from_Duet_in_C_Major_jvdgmr.mp3', soundscape_id: 1, artist_id: 2})
Track.create({title: 'stormy night', track_url: 'http://res.cloudinary.com/soundscape/video/upload/v1467321148/Allegro_from_Duet_in_C_Major_jvdgmr.mp3', soundscape_id: 1, artist_id: 1})
Track.create({title: 'beach day', track_url: 'http://res.cloudinary.com/soundscape/video/upload/v1467321148/Allegro_from_Duet_in_C_Major_jvdgmr.mp3', soundscape_id: 2, artist_id: 2})
Track.create({title: 'windy midwest', track_url: 'http://res.cloudinary.com/soundscape/video/upload/v1467321148/Allegro_from_Duet_in_C_Major_jvdgmr.mp3', soundscape_id: 3, artist_id: 4})
Track.create({title: 'around town', track_url: 'http://res.cloudinary.com/soundscape/video/upload/v1467321148/Allegro_from_Duet_in_C_Major_jvdgmr.mp3', soundscape_id: 4, artist_id: 1})
Track.create({title: 'viridian forest', track_url: 'http://res.cloudinary.com/soundscape/video/upload/v1467321148/Allegro_from_Duet_in_C_Major_jvdgmr.mp3', soundscape_id: 5, artist_id: 5})
Track.create({title: 'trees', track_url: 'http://res.cloudinary.com/soundscape/video/upload/v1467321148/Allegro_from_Duet_in_C_Major_jvdgmr.mp3', soundscape_id: 5, artist_id: 3})
Track.create({title: 'home sweet home', track_url: 'http://res.cloudinary.com/soundscape/video/upload/v1467321148/Allegro_from_Duet_in_C_Major_jvdgmr.mp3', soundscape_id: 6, artist_id: 1})
Track.create({title: 'flickering flame', track_url: 'http://res.cloudinary.com/soundscape/video/upload/v1467321148/Allegro_from_Duet_in_C_Major_jvdgmr.mp3', soundscape_id: 7, artist_id: 1})
Track.create({title: 'coffee', track_url: 'http://res.cloudinary.com/soundscape/video/upload/v1467321148/Allegro_from_Duet_in_C_Major_jvdgmr.mp3', soundscape_id: 8, artist_id: 3})
