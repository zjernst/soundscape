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

Soundscape.create({title: 'rain', image_url: 'https://res.cloudinary.com/soundscape/image/upload/c_crop,h_310,w_330/v1467311173/logo_sqngrs.png'})
Soundscape.create({title: 'waves', image_url: 'https://res.cloudinary.com/soundscape/image/upload/v1467310749/waves_logo.png'})
Soundscape.create({title: 'wind', image_url: 'https://res.cloudinary.com/soundscape/image/upload/c_crop,h_250/v1467311170/logo_1_t2yfgn.png'})
Soundscape.create({title: 'city', image_url: 'https://res.cloudinary.com/soundscape/image/upload/c_crop,h_225/v1467311166/logo_3_kaby3y.png'})
Soundscape.create({title: 'forest', image_url: 'https://res.cloudinary.com/soundscape/image/upload/c_crop,h_360/v1467311162/logo_4_axnjxa.png'})
Soundscape.create({title: 'home', image_url: 'https://res.cloudinary.com/soundscape/image/upload/c_crop,h_310/v1467311155/logo_6_bqqnfp.png'})
Soundscape.create({title: 'fire', image_url: 'https://res.cloudinary.com/soundscape/image/upload/c_crop,h_370/v1467311158/logo_5_kptop2.png'})
Soundscape.create({title: 'cafe', image_url: 'https://res.cloudinary.com/soundscape/image/upload/c_crop,h_310,w_350/v1467311151/logo_8_qqdcng.png'})

Track.create({title: 'Gentle Rain Storm in Meadow', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350593/156994__chrscrwfrd18__rain_xat7od.mp3',
  description: "10 minutes of a gentle rain accompanied by field birds. Distant thunder claps interspersed. (10 seconds delayed start to ease in for usage)", soundscape_id: 1, artist_id: 2})
Track.create({title: 'Under the Thunderstorm', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350570/141251__oroborosnz__thunder-storm_xgafnf.mp3',
  description: "Listening to a thunderstor under a tin room. Rains is very light. Frequently low, distant thunder rumblings!", soundscape_id: 1, artist_id: 1})
Track.create({title: 'Stormy Night', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350431/169159__joniheinonen__weather-thunder-drips-thunder-medium-rain-water-dripping-to-concrete-0001_fm2oco.mp3',
  description: "Late night thunderstorm recorded with GTX 4590. No post-processing, all-natural.", soundscape_id: 1, artist_id: 1})
Track.create({title: 'Ocean Waves', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350437/48412__luftrum__oceanwavescrushing_da1pdf.mp3',
  description: "Waves crashing over a tidepool in Northern California.", soundscape_id: 2, artist_id: 2})
Track.create({title: 'Seagulls and Waves', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467331331/eba0rbvycgrf00d21dwm.mp3',
  description: "Early morning with gentle waves rolling onto a sandy beach. Very active seagulls!", soundscape_id: 2, artist_id: 3})
Track.create({title: 'Calmwaves / Sandbeach', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350407/191296__klankbeeld__calmwaves-sandbeach-03-eq-130430-03_ie21qa.mp3',
  description: "Another recording of waves washing into a sandy beach.", soundscape_id: 2, artist_id: 4})
Track.create({title: 'Muted Pattering Waves', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350437/185225__northern-monkey__gentle-sea-wash_nqtxic.mp3',
  description: "Splish, splash! Gentle pattering of a sea wash I recorded.", soundscape_id: 2, artist_id: 2})
Track.create({title: 'Windy Wood', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350512/204325__dwareing__windy-wood-2_huc3dd.mp3',
  description: "Strong winds blowing through a wooded area. Strong but gentle track.", soundscape_id: 3, artist_id: 4})
Track.create({title: 'around town', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467321148/Allegro_from_Duet_in_C_Major_jvdgmr.mp3', soundscape_id: 4, artist_id: 1})
Track.create({title: 'Forest Stream', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350452/132049__kolezan__water-stream-5_kkilf2.mp3',
  description: "Recording of a meandering stream in a forest. Short track, but very peaceful!", soundscape_id: 5, artist_id: 5})
Track.create({title: 'Evening in the forest', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350414/18765__reinsamba__evening-in-the-forest_m4seqh.mp3',
  description: "Evening in a forest! Lots of active birds and scurrying creatures. Very alive!", soundscape_id: 5, artist_id: 3})
Track.create({title: 'River Through the Woods', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350392/196699__vonfleisch__river-running-water-2_tahtlz.mp3',
  description: "River running through the Whispering Woods. Chirping birds faint in the background if you really listen!", soundscape_id: 5, artist_id: 3})
Track.create({title: 'home sweet home', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467321148/Allegro_from_Duet_in_C_Major_jvdgmr.mp3', soundscape_id: 6, artist_id: 1})
Track.create({title: 'flickering flame', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467321148/Allegro_from_Duet_in_C_Major_jvdgmr.mp3', soundscape_id: 7, artist_id: 1})
Track.create({title: 'coffee', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467321148/Allegro_from_Duet_in_C_Major_jvdgmr.mp3', soundscape_id: 8, artist_id: 3})
