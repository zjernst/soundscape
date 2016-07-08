Tag.create({name: 'calm'})
Tag.create({name: 'water'})
Tag.create({name: 'gentle'})
Tag.create({name: 'quiet'})
Tag.create({name: 'loud'})
Tag.create({name: 'bold'})
Tag.create({name: 'distracting'})
Tag.create({name: 'pleasant'})
Tag.create({name: 'thunder'})
Tag.create({name: 'roaring'})
Tag.create({name: 'busy'})
Tag.create({name: 'nature'})
Tag.create({name: 'wildlife'})
Tag.create({name: 'birds'})
Tag.create({name: 'night'})
Tag.create({name: 'day'})
Tag.create({name: 'rumbling'})
Tag.create({name: 'sharp'})
Tag.create({name: 'round'})
Tag.create({name: 'soft'})
Tag.create({name: 'hard'})
Tag.create({name: 'insects'})
Tag.create({name: 'river'})
Tag.create({name: 'voices'})

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({username: 'Charizard', profile_pic: 'https://res.cloudinary.com/soundscape/image/upload/v1467914597/charizard_uoekg9.png', password: 'password'})
User.create({username: 'Blastoise', profile_pic: 'https://res.cloudinary.com/soundscape/image/upload/v1467914597/charizard_uoekg9.png', password: 'password'})
User.create({username: 'Venusaur', profile_pic: 'https://res.cloudinary.com/soundscape/image/upload/v1467914597/charizard_uoekg9.png', password: 'password'})
User.create({username: 'Pidgeotto', profile_pic: 'https://res.cloudinary.com/soundscape/image/upload/v1467914597/charizard_uoekg9.png', password: 'password'})
User.create({username: 'Butterfree', profile_pic: 'https://res.cloudinary.com/soundscape/image/upload/v1467914597/charizard_uoekg9.png', password: 'password'})
User.create({username: 'Snorlax', profile_pic: 'https://res.cloudinary.com/soundscape/image/upload/v1467914597/charizard_uoekg9.png', password: 'password'})

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

Tagging.create({track_id: 1, tag_id: 3})
Tagging.create({track_id: 1, tag_id: 9})
Tagging.create({track_id: 1, tag_id: 4})
Tagging.create({track_id: 1, tag_id: 19})
Tagging.create({track_id: 1, tag_id: 8})
Tagging.create({track_id: 1, tag_id: 1})

Track.create({title: 'Under the Thunderstorm', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350570/141251__oroborosnz__thunder-storm_xgafnf.mp3',
  description: "Listening to a thunderstor under a tin room. Rains is very light. Frequently low, distant thunder rumblings!", soundscape_id: 1, artist_id: 1})

Tagging.create({track_id: 2, tag_id: 2})
Tagging.create({track_id: 2, tag_id: 9})
Tagging.create({track_id: 2, tag_id: 17})
Tagging.create({track_id: 2, tag_id: 1})
Tagging.create({track_id: 2, tag_id: 3})
Tagging.create({track_id: 2, tag_id: 15})

Track.create({title: 'Stormy Night', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350431/169159__joniheinonen__weather-thunder-drips-thunder-medium-rain-water-dripping-to-concrete-0001_fm2oco.mp3',
  description: "Late night thunderstorm recorded with GTX 4590. No post-processing, all-natural.", soundscape_id: 1, artist_id: 1})

Tagging.create({track_id: 3, tag_id: 3})
Tagging.create({track_id: 3, tag_id: 4})
Tagging.create({track_id: 3, tag_id: 9})
Tagging.create({track_id: 3, tag_id: 1})

Track.create({title: 'Ocean Waves', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350437/48412__luftrum__oceanwavescrushing_da1pdf.mp3',
  description: "Waves crashing over a tidepool in Northern California.", soundscape_id: 2, artist_id: 2})

Tagging.create({track_id: 4, tag_id: 1})
Tagging.create({track_id: 4, tag_id: 2})
Tagging.create({track_id: 4, tag_id: 3})
Tagging.create({track_id: 4, tag_id: 8})

Track.create({title: 'Seagulls and Waves', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467331331/eba0rbvycgrf00d21dwm.mp3',
  description: "Early morning with gentle waves rolling onto a sandy beach. Very active seagulls!", soundscape_id: 2, artist_id: 3})

Tagging.create({track_id: 5, tag_id: 1})
Tagging.create({track_id: 5, tag_id: 2})
Tagging.create({track_id: 5, tag_id: 3})
Tagging.create({track_id: 5, tag_id: 14})
Tagging.create({track_id: 5, tag_id: 13})
Tagging.create({track_id: 5, tag_id: 4})

Track.create({title: 'Calmwaves / Sandbeach', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350407/191296__klankbeeld__calmwaves-sandbeach-03-eq-130430-03_ie21qa.mp3',
  description: "Another recording of waves washing into a sandy beach.", soundscape_id: 2, artist_id: 2})

Tagging.create({track_id: 6, tag_id: 3})
Tagging.create({track_id: 6, tag_id: 4})
Tagging.create({track_id: 6, tag_id: 19})
Tagging.create({track_id: 6, tag_id: 16})
Tagging.create({track_id: 6, tag_id: 1})

Track.create({title: 'Muted Pattering Waves', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350437/185225__northern-monkey__gentle-sea-wash_nqtxic.mp3',
  description: "Splish, splash! Gentle pattering of a sea wash I recorded.", soundscape_id: 2, artist_id: 2})

Tagging.create({track_id: 7, tag_id: 3})
Tagging.create({track_id: 7, tag_id: 4})
Tagging.create({track_id: 7, tag_id: 2})
Tagging.create({track_id: 7, tag_id: 8})
Tagging.create({track_id: 7, tag_id: 1})

Track.create({title: 'Windy Wood', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350512/204325__dwareing__windy-wood-2_huc3dd.mp3',
  description: "Strong winds blowing through a wooded area. Strong but gentle track.", soundscape_id: 3, artist_id: 2})

Tagging.create({track_id: 8, tag_id: 5})
Tagging.create({track_id: 8, tag_id: 21})
Tagging.create({track_id: 8, tag_id: 11})
Tagging.create({track_id: 8, tag_id: 10})
Tagging.create({track_id: 8, tag_id: 12})
Tagging.create({track_id: 8, tag_id: 17})

Track.create({title: 'Crouds', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467321148/Allegro_from_Duet_in_C_Major_jvdgmr.mp3',
  description: "A sampling of a variety of crowds", soundscape_id: 4, artist_id: 1})

Tagging.create({track_id: 9, tag_id: 5})
Tagging.create({track_id: 9, tag_id: 6})
Tagging.create({track_id: 9, tag_id: 11})
Tagging.create({track_id: 9, tag_id: 10})
Tagging.create({track_id: 9, tag_id: 24})
Tagging.create({track_id: 9, tag_id: 21})

Track.create({title: 'Forest Stream', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350452/132049__kolezan__water-stream-5_kkilf2.mp3',
  description: "Recording of a meandering stream in a forest. Short track, but very peaceful!", soundscape_id: 5, artist_id: 5})

Tagging.create({track_id: 10, tag_id: 3})
Tagging.create({track_id: 10, tag_id: 20})
Tagging.create({track_id: 10, tag_id: 4})
Tagging.create({track_id: 10, tag_id: 12})
Tagging.create({track_id: 10, tag_id: 8})
Tagging.create({track_id: 10, tag_id: 1})

Track.create({title: 'Evening in the forest', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350414/18765__reinsamba__evening-in-the-forest_m4seqh.mp3',
  description: "Evening in a forest! Lots of active birds and scurrying creatures. Very alive!", soundscape_id: 5, artist_id: 3})

Tagging.create({track_id: 11, tag_id: 13})
Tagging.create({track_id: 11, tag_id: 15})
Tagging.create({track_id: 11, tag_id: 1})
Tagging.create({track_id: 11, tag_id: 8})
Tagging.create({track_id: 11, tag_id: 14})

Track.create({title: 'River Through the Woods', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350392/196699__vonfleisch__river-running-water-2_tahtlz.mp3',
  description: "River running through the Whispering Woods. Chirping birds faint in the background if you really listen!", soundscape_id: 5, artist_id: 3})

Tagging.create({track_id: 12, tag_id: 2})
Tagging.create({track_id: 12, tag_id: 12})
Tagging.create({track_id: 12, tag_id: 4})
Tagging.create({track_id: 12, tag_id: 14})

Track.create({title: 'Conversations of Home', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467988202/237536__joangilbardaji__a-conversation-in-a-musulman-family-mn_aoqoc0.wav',
  description: 'just a normal conversation in my household', soundscape_id: 6, artist_id: 6})

Tagging.create({track_id: 13, tag_id: 16})
Tagging.create({track_id: 13, tag_id: 18})
Tagging.create({track_id: 13, tag_id: 21})
Tagging.create({track_id: 13, tag_id: 11})

Track.create({title: 'Flickering Flame', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467321148/Allegro_from_Duet_in_C_Major_jvdgmr.mp3',
  description: 'gentle sound of crackling fire', soundscape_id: 7, artist_id: 1})

Tagging.create({track_id: 14, tag_id: 3})
Tagging.create({track_id: 14, tag_id: 8})
Tagging.create({track_id: 14, tag_id: 20})
Tagging.create({track_id: 14, tag_id: 4})
Tagging.create({track_id: 14, tag_id: 1})

Track.create({title: 'Active Coffee', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467594693/coffee/216138__somersethypnotherapy__ambient-coffee-shop-sounds.mp3',
  description: 'Busy afternoon in a German coffee shop. Lots of bustle and activity.', soundscape_id: 8, artist_id: 3})

Tagging.create({track_id: 15, tag_id: 5})
Tagging.create({track_id: 15, tag_id: 6})
Tagging.create({track_id: 15, tag_id: 16})
Tagging.create({track_id: 15, tag_id: 11})
Tagging.create({track_id: 15, tag_id: 21})

Track.create({title: 'Busy Shop w/ Music in Background', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467594687/coffee/178544__muse384__coffee-shop.mp3',
  description: 'Busy coffee show with Beach House playing in the background. Busy track.', soundscape_id: 8, artist_id: 6})

Tagging.create({track_id: 16, tag_id: 5})
Tagging.create({track_id: 16, tag_id: 16})
Tagging.create({track_id: 16, tag_id: 11})
Tagging.create({track_id: 16, tag_id: 7})


Track.create({title: 'Coffee Shop Murmurings pt: 1', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467594659/coffee/233280__jarredgibb__ambience-coffee-shop-1.mp3',
  description: 'Lovely day in a British coffee shop. Quieter track, but lots of laughing and chattering. Part 1/3', soundscape_id: 8, artist_id: 6})

Tagging.create({track_id: 17, tag_id: 5})
Tagging.create({track_id: 17, tag_id: 3})
Tagging.create({track_id: 17, tag_id: 16})
Tagging.create({track_id: 17, tag_id: 11})
Tagging.create({track_id: 17, tag_id: 8})

Track.create({title: 'Coffee Shop Murmurings pt: 2', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467594639/coffee/233283__jarredgibb__ambience-coffee-shop-4.mp3',
  description: 'Continuation of my first recording. Part 2/3', soundscape_id: 8, artist_id: 6})

Tagging.create({track_id: 18, tag_id: 5})
Tagging.create({track_id: 18, tag_id: 3})
Tagging.create({track_id: 18, tag_id: 16})
Tagging.create({track_id: 18, tag_id: 11})
Tagging.create({track_id: 18, tag_id: 8})

Track.create({title: 'Coffee Shop Murmurings pt: 3', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467594637/coffee/233285__jarredgibb__ambience-coffee-shop-5.mp3',
  description: 'Final installment of my coffee shop trilogy. Hope you enjoyed! Part 3/3', soundscape_id: 8, artist_id: 6})

Tagging.create({track_id: 19, tag_id: 5})
Tagging.create({track_id: 19, tag_id: 3})
Tagging.create({track_id: 19, tag_id: 16})
Tagging.create({track_id: 19, tag_id: 11})
Tagging.create({track_id: 19, tag_id: 8})

Track.create({title: 'Bustle', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467594667/coffee/264347__soundslikewillem__german-coffee-shop-atmosphere.mp3',
  description: 'Active track of my favorite coffee shop! This is my first post so I hope you enjoy!!', soundscape_id: 8, artist_id: 5})

Tagging.create({track_id: 20, tag_id: 5})
Tagging.create({track_id: 20, tag_id: 18})
Tagging.create({track_id: 20, tag_id: 16})
Tagging.create({track_id: 20, tag_id: 11})

Track.create({title: 'Chatter over Coffee', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467594668/coffee/31526__sagetyrtle__restaurant3.mp3',
  description: 'Lots of quiet chattering. Slower day, so most of it is discernible if you listen closely. Accompanied by tip-type of keyboads', soundscape_id: 8, artist_id: 2})

Tagging.create({track_id: 21, tag_id: 4})
Tagging.create({track_id: 21, tag_id: 18})
Tagging.create({track_id: 21, tag_id: 16})
Tagging.create({track_id: 21, tag_id: 7})
Tagging.create({track_id: 21, tag_id: 3})

Track.create({title: 'Forest at Dawn', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467584530/FelixBlumePack/328292__felix-blume__forest-at-dawn-birds-cricket-squirrel-insects-chachalaca-parrot-colibri-woodpecker-in-the-sian-ka-an-biosphere-reserve.mp3',
  description: "Birds, crickets, squirrels, insects, parrot, and woodpecker in Sian Ka'an.", soundscape_id: 5, artist_id: 4})

Tagging.create({track_id: 22, tag_id: 5})
Tagging.create({track_id: 22, tag_id: 12})
Tagging.create({track_id: 22, tag_id: 13})
Tagging.create({track_id: 22, tag_id: 18})
Tagging.create({track_id: 22, tag_id: 14})
Tagging.create({track_id: 22, tag_id: 15})

Track.create({title: 'Wetland at Night', track_url: 'http://res.cloudinary.com/soundscape/video/upload/v1467584389/FelixBlumePack/328291__felix-blume__wetland-at-night-frogs-and-crickets-in-the-sian-ka-an-biosphere-reserve.mp3',
  description: "Frogs, crickets and other wildlife recorded at the Sian Ka'an Biosphere Reserve.", soundscape_id: 5, artist_id: 4})

Tagging.create({track_id: 23, tag_id: 5})
Tagging.create({track_id: 23, tag_id: 12})
Tagging.create({track_id: 23, tag_id: 13})
Tagging.create({track_id: 23, tag_id: 18})
Tagging.create({track_id: 23, tag_id: 14})
Tagging.create({track_id: 23, tag_id: 15})
Tagging.create({track_id: 23, tag_id: 22})

Track.create({title: 'Forest at Night', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467584462/FelixBlumePack/328293__felix-blume__forest-at-night-crickets-cicadas-and-insects-in-the-sian-ka-an-biosphere-reserve.mp3',
  description: "Crickets, cicadas, and insects. Chirping and humming on the nigth.", soundscape_id: 5, artist_id: 4})

Tagging.create({track_id: 24, tag_id: 5})
Tagging.create({track_id: 24, tag_id: 12})
Tagging.create({track_id: 24, tag_id: 13})
Tagging.create({track_id: 24, tag_id: 18})
Tagging.create({track_id: 24, tag_id: 14})
Tagging.create({track_id: 24, tag_id: 15})
Tagging.create({track_id: 24, tag_id: 22})

Track.create({title: 'Light Windy Morning', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467584429/FelixBlumePack/328295__felix-blume__forest-at-dawn-with-a-light-wind-in-the-trees-grey-hawk-jay-colibri-birds-crickets-and-insects-in-the-sian-ka-an-biosphere-reserve.mp3',
  description: "Lots of birds in this one! Light wind rolls through an early morning in the forest.", soundscape_id: 5, artist_id: 4})

Tagging.create({track_id: 25, tag_id: 5})
Tagging.create({track_id: 25, tag_id: 12})
Tagging.create({track_id: 25, tag_id: 13})
Tagging.create({track_id: 25, tag_id: 18})
Tagging.create({track_id: 25, tag_id: 14})
Tagging.create({track_id: 25, tag_id: 15})
Tagging.create({track_id: 25, tag_id: 22})

Track.create({title: 'Sound of the Laguna', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467584276/FelixBlumePack/328299__felix-blume__aquatic-sound-of-the-laguna-from-the-dock-of-playon-in-the-sian-ka-an-biosphere-reserve.mp3',
  description: "Aquatic sound of the laguna from the dock of Playton in the Sian Ka'an biosphere", soundscape_id: 5, artist_id: 4})

Tagging.create({track_id: 26, tag_id: 4})
Tagging.create({track_id: 26, tag_id: 1})
Tagging.create({track_id: 26, tag_id: 2})
Tagging.create({track_id: 26, tag_id: 12})
Tagging.create({track_id: 26, tag_id: 13})
Tagging.create({track_id: 26, tag_id: 8})
Tagging.create({track_id: 26, tag_id: 20})

Track.create({title: 'Squacking Birds', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467584536/FelixBlumePack/328304__felix-blume__chachalas-birds-screaming-at-dawn-in-the-forest-in-the-sian-ka-an-biosphere-reserve.mp3',
  description: "Chachalas birds screaming at dawn in the forest.", soundscape_id: 5, artist_id: 4})

Tagging.create({track_id: 27, tag_id: 5})
Tagging.create({track_id: 27, tag_id: 12})
Tagging.create({track_id: 27, tag_id: 13})
Tagging.create({track_id: 27, tag_id: 18})
Tagging.create({track_id: 27, tag_id: 14})
Tagging.create({track_id: 27, tag_id: 15})
Tagging.create({track_id: 27, tag_id: 22})

Track.create({title: 'Aquatic Sound of the Sea', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467584201/FelixBlumePack/328306__felix-blume__aquatic-sound-of-the-sea-from-the-boat-close-to-punta-allen-recife-in-the-sian-ka-an-biosphere-reserve.mp3',
  description: "Aquatic sound of the sea from the boat close to Punta Allen Recife in the Sian Ka'an Biosphere", soundscape_id: 2, artist_id: 4})

  Tagging.create({track_id: 28, tag_id: 4})
  Tagging.create({track_id: 28, tag_id: 1})
  Tagging.create({track_id: 28, tag_id: 2})
  Tagging.create({track_id: 28, tag_id: 12})
  Tagging.create({track_id: 28, tag_id: 13})
  Tagging.create({track_id: 28, tag_id: 8})
  Tagging.create({track_id: 28, tag_id: 20})

Track.create({title: 'River Running', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467989121/196699__vonfleisch__river-running-water-2_1_bd0i1l.wav',
  description: "Lovely track of a river.", soundscape_id: 5, artist_id: 2})

Tagging.create({track_id: 29, tag_id: 23})
Tagging.create({track_id: 29, tag_id: 4})
Tagging.create({track_id: 29, tag_id: 8})
Tagging.create({track_id: 29, tag_id: 12})
Tagging.create({track_id: 29, tag_id: 16})
Tagging.create({track_id: 29, tag_id: 20})

Track.create({title: 'Tidepool', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467989056/332171__pyro13djt__water-in-a-pond_ng0co9.ogg',
  description: "Playing in a tidepool on the Pacific.", soundscape_id: 2, artist_id: 2})

Tagging.create({track_id: 30, tag_id: 1})
Tagging.create({track_id: 30, tag_id: 2})
Tagging.create({track_id: 30, tag_id: 8})
Tagging.create({track_id: 30, tag_id: 12})
Tagging.create({track_id: 30, tag_id: 16})
Tagging.create({track_id: 30, tag_id: 20})


Track.create({title: 'Edge of the Forest', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467988064/135135__inchadney__at-the-edge-of-the-forest_qcyozy.wav',
  description: "I'm standing on the Edge.", soundscape_id: 5, artist_id: 4})

Tagging.create({track_id: 31, tag_id: 5})
Tagging.create({track_id: 31, tag_id: 12})
Tagging.create({track_id: 31, tag_id: 13})
Tagging.create({track_id: 31, tag_id: 1})
Tagging.create({track_id: 31, tag_id: 15})
Tagging.create({track_id: 31, tag_id: 4})

Track.create({title: 'Old Cassette Player', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467987479/191840__klankbeeld__old-womans-cassette-player-1987_pqdyw7.mp3',
  description: "Conversing over dinner", soundscape_id: 6, artist_id: 4})

Tagging.create({track_id: 32, tag_id: 19})
Tagging.create({track_id: 32, tag_id: 18})
Tagging.create({track_id: 32, tag_id: 11})
Tagging.create({track_id: 32, tag_id: 7})

Track.create({title: 'Stories of War', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467987479/191840__klankbeeld__old-womans-cassette-player-1987_pqdyw7.mp3',
  description: "Barcelona resident recalling stories of war", soundscape_id: 6, artist_id: 4})

Tagging.create({track_id: 33, tag_id: 6})
Tagging.create({track_id: 33, tag_id: 7})
Tagging.create({track_id: 33, tag_id: 11})
Tagging.create({track_id: 33, tag_id: 21})
Tagging.create({track_id: 33, tag_id: 18})

Track.create({title: 'Dance Practice', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467987479/191840__klankbeeld__old-womans-cassette-player-1987_pqdyw7.mp3',
  description: "Recording of a local dance class", soundscape_id: 6, artist_id: 6})

Tagging.create({track_id: 34, tag_id: 6})
Tagging.create({track_id: 34, tag_id: 7})
Tagging.create({track_id: 34, tag_id: 11})
Tagging.create({track_id: 34, tag_id: 24})
Tagging.create({track_id: 34, tag_id: 18})

Track.create({title: 'Setting up Christmas Eve', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467987035/111141__miastodzwiekow__preparing-christmaseve-table-241210_okudxl.mp3',
  description: "Getting ready for a family dinner", soundscape_id: 6, artist_id: 6})

Tagging.create({track_id: 35, tag_id: 6})
Tagging.create({track_id: 35, tag_id: 7})
Tagging.create({track_id: 35, tag_id: 11})
Tagging.create({track_id: 35, tag_id: 24})
Tagging.create({track_id: 35, tag_id: 19})

Track.create({title: 'Carnival', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467987035/111141__miastodzwiekow__preparing-christmaseve-table-241210_okudxl.mp3',
  description: "Carnival ambiance recorded in Holland", soundscape_id: 4, artist_id: 1})

Tagging.create({track_id: 36, tag_id: 6})
Tagging.create({track_id: 36, tag_id: 3})
Tagging.create({track_id: 36, tag_id: 11})
Tagging.create({track_id: 36, tag_id: 24})
Tagging.create({track_id: 36, tag_id: 1})

Track.create({title: 'Walk Thru Shop', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467987035/111141__miastodzwiekow__preparing-christmaseve-table-241210_okudxl.mp3',
  description: "Walking down the streets and listening to vendors", soundscape_id: 4, artist_id: 3})

Tagging.create({track_id: 37, tag_id: 6})
Tagging.create({track_id: 37, tag_id: 17})
Tagging.create({track_id: 37, tag_id: 11})
Tagging.create({track_id: 37, tag_id: 24})
Tagging.create({track_id: 37, tag_id: 16})

Track.create({title: 'Traffic', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467963467/city/173154__inchadney__traffic.mp3',
  description: "Traffic", soundscape_id: 4, artist_id: 5})

Tagging.create({track_id: 38, tag_id: 7})
Tagging.create({track_id: 38, tag_id: 17})
Tagging.create({track_id: 38, tag_id: 11})
Tagging.create({track_id: 38, tag_id: 21})
Tagging.create({track_id: 38, tag_id: 16})

Track.create({title: 'More traffic', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467963465/city/110310__nickpursehouse__traffic-medium-city-dry-road-xy-90-degrees-recording.mp3',
  description: "More traffic", soundscape_id: 4, artist_id: 5})

Tagging.create({track_id: 39, tag_id: 7})
Tagging.create({track_id: 39, tag_id: 17})
Tagging.create({track_id: 39, tag_id: 11})
Tagging.create({track_id: 39, tag_id: 21})
Tagging.create({track_id: 39, tag_id: 16})

Track.create({title: 'Under the Underpass', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467963434/city/160001__klangfabrik__highwayunderpass.mp3',
  description: "More traffic", soundscape_id: 4, artist_id: 1})

Tagging.create({track_id: 40, tag_id: 8})
Tagging.create({track_id: 40, tag_id: 17})
Tagging.create({track_id: 40, tag_id: 3})
Tagging.create({track_id: 40, tag_id: 19})
Tagging.create({track_id: 40, tag_id: 16})

Track.create({title: 'Morocco Marketplace', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467987035/111141__miastodzwiekow__preparing-christmaseve-table-241210_okudxl.mp3',
  description: "Walking down the streets and listening to vendors", soundscape_id: 4, artist_id: 1})

Tagging.create({track_id: 41, tag_id: 6})
Tagging.create({track_id: 41, tag_id: 17})
Tagging.create({track_id: 41, tag_id: 11})
Tagging.create({track_id: 41, tag_id: 24})
Tagging.create({track_id: 41, tag_id: 3})
Tagging.create({track_id: 41, tag_id: 4})
Tagging.create({track_id: 41, tag_id: 8})

Track.create({title: 'Sazman Marketplace', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467963339/city/7890__sazman__marketplace.mp3',
  description: "Food markey in Sazman. Lots going on! Busy and loud", soundscape_id: 4, artist_id: 5})

Tagging.create({track_id: 42, tag_id: 21})
Tagging.create({track_id: 42, tag_id: 16})
Tagging.create({track_id: 42, tag_id: 11})
Tagging.create({track_id: 42, tag_id: 24})
Tagging.create({track_id: 42, tag_id: 3})
Tagging.create({track_id: 42, tag_id: 5})
Tagging.create({track_id: 42, tag_id: 10})

Track.create({title: 'Chongnyangyi Market', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467963339/city/7890__sazman__marketplace.mp3',
  description: "Another market", soundscape_id: 4, artist_id: 5})

Tagging.create({track_id: 43, tag_id: 21})
Tagging.create({track_id: 43, tag_id: 10})
Tagging.create({track_id: 43, tag_id: 11})
Tagging.create({track_id: 43, tag_id: 24})
Tagging.create({track_id: 43, tag_id: 3})
Tagging.create({track_id: 43, tag_id: 5})

Track.create({title: 'Saturday Night Revelry', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467963325/city/106905__bulldozia__saturday-night-revelry.mp3',
  description: "Loud and active Saturday night in the city", soundscape_id: 4, artist_id: 6})

Tagging.create({track_id: 44, tag_id: 21})
Tagging.create({track_id: 44, tag_id: 10})
Tagging.create({track_id: 44, tag_id: 11})
Tagging.create({track_id: 44, tag_id: 24})
Tagging.create({track_id: 44, tag_id: 3})
Tagging.create({track_id: 44, tag_id: 5})
Tagging.create({track_id: 44, tag_id: 6})

Track.create({title: 'Picnic Fire', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467614579/fire/54945__satoration__preparing-fire-at-the-picnic.mp3',
  description: 'Preparing a fire for a weekend picnic with family', soundscape_id: 7, artist_id: 1})

Tagging.create({track_id: 45, tag_id: 3})
Tagging.create({track_id: 45, tag_id: 7})
Tagging.create({track_id: 45, tag_id: 20})
Tagging.create({track_id: 45, tag_id: 4})
Tagging.create({track_id: 45, tag_id: 1})

Track.create({title: 'Winter Heat', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467614576/fire/46272__phreaksaccount__fire-medium-loop.mp3',
  description: 'Building a fire to keep warm in the harsh winter', soundscape_id: 7, artist_id: 3})

Tagging.create({track_id: 46, tag_id: 3})
Tagging.create({track_id: 46, tag_id: 10})
Tagging.create({track_id: 46, tag_id: 20})
Tagging.create({track_id: 46, tag_id: 4})
Tagging.create({track_id: 46, tag_id: 1})

Track.create({title: 'Crackling Fireplace', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467614570/fire/60568__robinhood76__00370-fireplace-1.mp3',
  description: 'Fireplace crackles and pops! Great ambiance, might be a bit distracting to some though.', soundscape_id: 7, artist_id: 1})

Tagging.create({track_id: 47, tag_id: 7})
Tagging.create({track_id: 47, tag_id: 10})
Tagging.create({track_id: 47, tag_id: 20})
Tagging.create({track_id: 47, tag_id: 5})
Tagging.create({track_id: 47, tag_id: 1})

Track.create({title: 'Campfire', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467614576/fire/46272__phreaksaccount__fire-medium-loop.mp3',
  description: 'Short sample of a fire while camping. Lovely quality, just with my phone had more battery to record more!', soundscape_id: 7, artist_id: 3})

Tagging.create({track_id: 48, tag_id: 3})
Tagging.create({track_id: 48, tag_id: 10})
Tagging.create({track_id: 48, tag_id: 5})
Tagging.create({track_id: 48, tag_id: 6})

Track.create({title: 'Roaring Forest Fire', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467614555/fire/17548__dynamicell__fire-forest-inferno.mp3',
  description: 'Short clip, but check out this awesome fire!', soundscape_id: 7, artist_id: 1})

Tagging.create({track_id: 49, tag_id: 7})
Tagging.create({track_id: 49, tag_id: 10})
Tagging.create({track_id: 49, tag_id: 17})
Tagging.create({track_id: 49, tag_id: 5})
Tagging.create({track_id: 49, tag_id: 1})

Track.create({title: 'Tidepool', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467989056/332171__pyro13djt__water-in-a-pond_ng0co9.ogg',
  description: "Playing in a tidepool on the Pacific.", soundscape_id: 2, artist_id: 2})

Tagging.create({track_id: 50, tag_id: 1})
Tagging.create({track_id: 50, tag_id: 2})
Tagging.create({track_id: 50, tag_id: 8})
Tagging.create({track_id: 50, tag_id: 12})
Tagging.create({track_id: 50, tag_id: 16})
Tagging.create({track_id: 50, tag_id: 20})
