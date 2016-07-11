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

User.create({username: 'Charizard', profile_pic: 'https://res.cloudinary.com/soundscape/image/upload/v1467914597/charizard_uoekg9.png', password: 'password',
  bio: 'I fly around the sky in search of powerful opponents. I breath fire of such great heat that it melts anything. However, I never turn my fiery breath
  on any opponent weaker than myself. In in this the sick fire sounds', cover_photo: 'https://res.cloudinary.com/soundscape/image/upload/v1468213138/fire_c1ieug.jpg'})
User.create({username: 'Blastoise', profile_pic: 'https://res.cloudinary.com/soundscape/image/upload/v1468213370/blastoise_huzeen.png', password: 'password',
  bio: 'The jets of water I spout from the rocket cannons on my shell can punch through thick steel. But really I just want to listen to chill ocean waves.',
  cover_photo: 'https://res.cloudinary.com/soundscape/image/upload/v1468213530/oceanwater_kdohd1.jpg',
  })
User.create({username: 'Venusaur', profile_pic: 'https://res.cloudinary.com/soundscape/image/upload/v1468213504/venusaur_xmuuou.png', password: 'password',
  bio: 'After a rainy day, the flower on my back smells stronger. The scent attracts other Pokémon.',
  cover_photo: 'https://res.cloudinary.com/soundscape/image/upload/v1468213736/rainforest_hs7tf3.jpg'})
User.create({username: 'Pidgeotto', profile_pic: 'https://res.cloudinary.com/soundscape/image/upload/v1468214106/17-Pidgeotto_p3alm4.png', password: 'password',
  bio: "I claim a large area as my own territory. I flies around, patrolling my living space. If my territory is violated, I show no mercy in thoroughly
  punishing the foe with my sharp claws. My home is the Sian Ka'an biosphere -- beware (but I'll share our great sounds with you anyway).",
  cover_photo: 'https://res.cloudinary.com/soundscape/image/upload/v1468214123/skypic_nvlxtg.jpg'})
User.create({username: 'Butterfree', profile_pic: 'https://res.cloudinary.com/soundscape/image/upload/v1468214347/butterfree_dawq6t.png',
  bio: 'I have a superior ability to search for delicious honey from flowers. I can seek, extract, and carry honey from flowers blooming over six miles away.',
  password: 'password', cover_photo: 'https://res.cloudinary.com/soundscape/image/upload/v1468214368/mistforest_qvwfie.jpg'})
User.create({username: 'Snorlax', profile_pic: 'https://res.cloudinary.com/soundscape/image/upload/v1468214524/snorlax_whsgpn.png', password: 'password',
  bio: 'Very lazy. Just eat and sleep. As my rotund bulk builds, I becomes steadily more slothful.', cover_photo: 'https://res.cloudinary.com/soundscape/image/upload/v1468214524/cookies_thnd95.jpg'})

Soundscape.create({title: 'rain', image_url: 'https://res.cloudinary.com/soundscape/image/upload/c_crop,h_310,w_330/v1467311173/logo_sqngrs.png'})
Soundscape.create({title: 'waves', image_url: 'https://res.cloudinary.com/soundscape/image/upload/v1467310749/waves_logo.png'})
Soundscape.create({title: 'wind', image_url: 'https://res.cloudinary.com/soundscape/image/upload/c_crop,h_250/v1467311170/logo_1_t2yfgn.png'})
Soundscape.create({title: 'city', image_url: 'https://res.cloudinary.com/soundscape/image/upload/c_crop,h_225/v1467311166/logo_3_kaby3y.png'})
Soundscape.create({title: 'forest', image_url: 'https://res.cloudinary.com/soundscape/image/upload/c_crop,h_360/v1467311162/logo_4_axnjxa.png'})
Soundscape.create({title: 'home', image_url: 'https://res.cloudinary.com/soundscape/image/upload/c_crop,h_310/v1467311155/logo_6_bqqnfp.png'})
Soundscape.create({title: 'fire', image_url: 'https://res.cloudinary.com/soundscape/image/upload/c_crop,h_370/v1467311158/logo_5_kptop2.png'})
Soundscape.create({title: 'cafe', image_url: 'https://res.cloudinary.com/soundscape/image/upload/c_crop,h_310,w_350/v1467311151/logo_8_qqdcng.png'})

Track.create({title: 'Soft Rain and Thunder', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1468219722/327699__dobroide__20151101-soft-rain-thunder-05_tedd06.mp3',
  description: "Soft rain with some thunder in the distance. Very calming", downloads: 26, soundscape_id: 1, artist_id: 2})

Tagging.create({track_id: 1, tag_id: 3})
Tagging.create({track_id: 1, tag_id: 9})
Tagging.create({track_id: 1, tag_id: 4})
Tagging.create({track_id: 1, tag_id: 19})
Tagging.create({track_id: 1, tag_id: 8})
Tagging.create({track_id: 1, tag_id: 1})

Track.create({title: 'Under the Thunderstorm', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350570/141251__oroborosnz__thunder-storm_xgafnf.mp3',
  description: "Listening to a thunderstor under a tin room. Rains is very light. Frequently low, distant thunder rumblings!", downloads: 36, soundscape_id: 1, artist_id: 1})

Tagging.create({track_id: 2, tag_id: 2})
Tagging.create({track_id: 2, tag_id: 9})
Tagging.create({track_id: 2, tag_id: 17})
Tagging.create({track_id: 2, tag_id: 1})
Tagging.create({track_id: 2, tag_id: 3})
Tagging.create({track_id: 2, tag_id: 15})

Track.create({title: 'Stormy Night', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350431/169159__joniheinonen__weather-thunder-drips-thunder-medium-rain-water-dripping-to-concrete-0001_fm2oco.mp3',
  description: "Late night thunderstorm recorded with GTX 4590. No post-processing, all-natural.", downloads: 41, soundscape_id: 1, artist_id: 1})

Tagging.create({track_id: 3, tag_id: 3})
Tagging.create({track_id: 3, tag_id: 4})
Tagging.create({track_id: 3, tag_id: 9})
Tagging.create({track_id: 3, tag_id: 1})

Track.create({title: 'Ocean Waves', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350437/48412__luftrum__oceanwavescrushing_da1pdf.mp3',
  description: "Waves crashing over a tidepool in Northern California.", downloads: 40, soundscape_id: 2, artist_id: 2})

Tagging.create({track_id: 4, tag_id: 1})
Tagging.create({track_id: 4, tag_id: 2})
Tagging.create({track_id: 4, tag_id: 3})
Tagging.create({track_id: 4, tag_id: 8})

Track.create({title: 'Seagulls and Waves', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467331331/eba0rbvycgrf00d21dwm.mp3',
  description: "Early morning with gentle waves rolling onto a sandy beach. Very active seagulls!", downloads: 36, soundscape_id: 2, artist_id: 3})

Tagging.create({track_id: 5, tag_id: 1})
Tagging.create({track_id: 5, tag_id: 2})
Tagging.create({track_id: 5, tag_id: 3})
Tagging.create({track_id: 5, tag_id: 14})
Tagging.create({track_id: 5, tag_id: 13})
Tagging.create({track_id: 5, tag_id: 4})

Track.create({title: 'Calmwaves / Sandbeach', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350407/191296__klankbeeld__calmwaves-sandbeach-03-eq-130430-03_ie21qa.mp3',
  description: "Another recording of waves washing into a sandy beach.", downloads: 21, soundscape_id: 2, artist_id: 2})

Tagging.create({track_id: 6, tag_id: 3})
Tagging.create({track_id: 6, tag_id: 4})
Tagging.create({track_id: 6, tag_id: 19})
Tagging.create({track_id: 6, tag_id: 16})
Tagging.create({track_id: 6, tag_id: 1})

Track.create({title: 'Muted Pattering Waves', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350437/185225__northern-monkey__gentle-sea-wash_nqtxic.mp3',
  description: "Splish, splash! Gentle pattering of a sea wash I recorded.", downloads: 30, soundscape_id: 2, artist_id: 2})

Tagging.create({track_id: 7, tag_id: 3})
Tagging.create({track_id: 7, tag_id: 4})
Tagging.create({track_id: 7, tag_id: 2})
Tagging.create({track_id: 7, tag_id: 8})
Tagging.create({track_id: 7, tag_id: 1})

Track.create({title: 'Windy Wood', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350512/204325__dwareing__windy-wood-2_huc3dd.mp3',
  description: "Strong winds blowing through a wooded area. Strong but gentle track.", downloads: 5, soundscape_id: 3, artist_id: 2})

Tagging.create({track_id: 8, tag_id: 5})
Tagging.create({track_id: 8, tag_id: 21})
Tagging.create({track_id: 8, tag_id: 11})
Tagging.create({track_id: 8, tag_id: 10})
Tagging.create({track_id: 8, tag_id: 12})
Tagging.create({track_id: 8, tag_id: 17})

Track.create({title: 'Crouds', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467321148/Allegro_from_Duet_in_C_Major_jvdgmr.mp3',
  description: "A sampling of a variety of crowds", downloads: 9, soundscape_id: 4, artist_id: 1})

Tagging.create({track_id: 9, tag_id: 5})
Tagging.create({track_id: 9, tag_id: 6})
Tagging.create({track_id: 9, tag_id: 11})
Tagging.create({track_id: 9, tag_id: 10})
Tagging.create({track_id: 9, tag_id: 24})
Tagging.create({track_id: 9, tag_id: 21})

Track.create({title: 'Forest Stream', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350452/132049__kolezan__water-stream-5_kkilf2.mp3',
  description: "Recording of a meandering stream in a forest. Short track, but very peaceful!", downloads: 18, soundscape_id: 5, artist_id: 5})

Tagging.create({track_id: 10, tag_id: 3})
Tagging.create({track_id: 10, tag_id: 20})
Tagging.create({track_id: 10, tag_id: 4})
Tagging.create({track_id: 10, tag_id: 12})
Tagging.create({track_id: 10, tag_id: 8})
Tagging.create({track_id: 10, tag_id: 1})

Track.create({title: 'Evening in the forest', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350414/18765__reinsamba__evening-in-the-forest_m4seqh.mp3',
  description: "Evening in a forest! Lots of active birds and scurrying creatures. Very alive!", downloads: 17, soundscape_id: 5, artist_id: 3})

Tagging.create({track_id: 11, tag_id: 13})
Tagging.create({track_id: 11, tag_id: 15})
Tagging.create({track_id: 11, tag_id: 1})
Tagging.create({track_id: 11, tag_id: 8})
Tagging.create({track_id: 11, tag_id: 14})

Track.create({title: 'River Through the Woods', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350392/196699__vonfleisch__river-running-water-2_tahtlz.mp3',
  description: "River running through the Whispering Woods. Chirping birds faint in the background if you really listen!", downloads: 32, soundscape_id: 5, artist_id: 3})

Tagging.create({track_id: 12, tag_id: 2})
Tagging.create({track_id: 12, tag_id: 12})
Tagging.create({track_id: 12, tag_id: 4})
Tagging.create({track_id: 12, tag_id: 14})

Track.create({title: 'Conversations of Home', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467988202/237536__joangilbardaji__a-conversation-in-a-musulman-family-mn_aoqoc0.wav',
  description: 'just a normal conversation in my household', downloads: 6, soundscape_id: 6, artist_id: 6})

Tagging.create({track_id: 13, tag_id: 16})
Tagging.create({track_id: 13, tag_id: 18})
Tagging.create({track_id: 13, tag_id: 21})
Tagging.create({track_id: 13, tag_id: 11})

Track.create({title: 'Flickering Flame', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467614594/fire/182368__kingsrow__fire-crackling-02.mp3',
  description: 'gentle sound of crackling fire', downloads: 8, soundscape_id: 7, artist_id: 1})

Tagging.create({track_id: 14, tag_id: 3})
Tagging.create({track_id: 14, tag_id: 8})
Tagging.create({track_id: 14, tag_id: 20})
Tagging.create({track_id: 14, tag_id: 4})
Tagging.create({track_id: 14, tag_id: 1})

Track.create({title: 'Active Coffee', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467594693/coffee/216138__somersethypnotherapy__ambient-coffee-shop-sounds.mp3',
  description: 'Busy afternoon in a German coffee shop. Lots of bustle and activity.', downloads: 0, soundscape_id: 8, artist_id: 3})

Tagging.create({track_id: 15, tag_id: 5})
Tagging.create({track_id: 15, tag_id: 6})
Tagging.create({track_id: 15, tag_id: 16})
Tagging.create({track_id: 15, tag_id: 11})
Tagging.create({track_id: 15, tag_id: 21})

Track.create({title: 'Busy Shop w/ Music in Background', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467594687/coffee/178544__muse384__coffee-shop.mp3',
  description: 'Busy coffee show with Beach House playing in the background. Busy track.', downloads: 6, soundscape_id: 8, artist_id: 6})

Tagging.create({track_id: 16, tag_id: 5})
Tagging.create({track_id: 16, tag_id: 16})
Tagging.create({track_id: 16, tag_id: 11})
Tagging.create({track_id: 16, tag_id: 7})


Track.create({title: 'Coffee Shop Murmurings pt: 1', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467594659/coffee/233280__jarredgibb__ambience-coffee-shop-1.mp3',
  description: 'Lovely day in a British coffee shop. Quieter track, but lots of laughing and chattering. Part 1/3', downloads: 14, soundscape_id: 8, artist_id: 6})

Tagging.create({track_id: 17, tag_id: 5})
Tagging.create({track_id: 17, tag_id: 3})
Tagging.create({track_id: 17, tag_id: 16})
Tagging.create({track_id: 17, tag_id: 11})
Tagging.create({track_id: 17, tag_id: 8})

Track.create({title: 'Coffee Shop Murmurings pt: 2', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467594639/coffee/233283__jarredgibb__ambience-coffee-shop-4.mp3',
  description: 'Continuation of my first recording. Part 2/3', downloads: 11, soundscape_id: 8, artist_id: 6})

Tagging.create({track_id: 18, tag_id: 5})
Tagging.create({track_id: 18, tag_id: 3})
Tagging.create({track_id: 18, tag_id: 16})
Tagging.create({track_id: 18, tag_id: 11})
Tagging.create({track_id: 18, tag_id: 8})

Track.create({title: 'Coffee Shop Murmurings pt: 3', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467594637/coffee/233285__jarredgibb__ambience-coffee-shop-5.mp3',
  description: 'Final installment of my coffee shop trilogy. Hope you enjoyed! Part 3/3', downloads: 12, soundscape_id: 8, artist_id: 6})

Tagging.create({track_id: 19, tag_id: 5})
Tagging.create({track_id: 19, tag_id: 3})
Tagging.create({track_id: 19, tag_id: 16})
Tagging.create({track_id: 19, tag_id: 11})
Tagging.create({track_id: 19, tag_id: 8})

Track.create({title: 'Bustle', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467594667/coffee/264347__soundslikewillem__german-coffee-shop-atmosphere.mp3',
  description: 'Active track of my favorite coffee shop! This is my first post so I hope you enjoy!!', downloads: 10, soundscape_id: 8, artist_id: 5})

Tagging.create({track_id: 20, tag_id: 5})
Tagging.create({track_id: 20, tag_id: 18})
Tagging.create({track_id: 20, tag_id: 16})
Tagging.create({track_id: 20, tag_id: 11})

Track.create({title: 'Chatter over Coffee', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467594668/coffee/31526__sagetyrtle__restaurant3.mp3',
  description: 'Lots of quiet chattering. Slower day, so most of it is discernible if you listen closely. Accompanied by tip-type of keyboads', downloads: 7, soundscape_id: 8, artist_id: 2})

Tagging.create({track_id: 21, tag_id: 4})
Tagging.create({track_id: 21, tag_id: 18})
Tagging.create({track_id: 21, tag_id: 16})
Tagging.create({track_id: 21, tag_id: 7})
Tagging.create({track_id: 21, tag_id: 3})

Track.create({title: 'Forest at Dawn', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467584530/FelixBlumePack/328292__felix-blume__forest-at-dawn-birds-cricket-squirrel-insects-chachalaca-parrot-colibri-woodpecker-in-the-sian-ka-an-biosphere-reserve.mp3',
  description: "Birds, crickets, squirrels, insects, parrot, and woodpecker in Sian Ka'an.", downloads: 24, soundscape_id: 5, artist_id: 4})

Tagging.create({track_id: 22, tag_id: 5})
Tagging.create({track_id: 22, tag_id: 12})
Tagging.create({track_id: 22, tag_id: 13})
Tagging.create({track_id: 22, tag_id: 18})
Tagging.create({track_id: 22, tag_id: 14})
Tagging.create({track_id: 22, tag_id: 15})

Track.create({title: 'Wetland at Night', track_url: 'http://res.cloudinary.com/soundscape/video/upload/v1467584389/FelixBlumePack/328291__felix-blume__wetland-at-night-frogs-and-crickets-in-the-sian-ka-an-biosphere-reserve.mp3',
  description: "Frogs, crickets and other wildlife recorded at the Sian Ka'an Biosphere Reserve.", downloads: 4, soundscape_id: 5, artist_id: 4})

Tagging.create({track_id: 23, tag_id: 5})
Tagging.create({track_id: 23, tag_id: 12})
Tagging.create({track_id: 23, tag_id: 13})
Tagging.create({track_id: 23, tag_id: 18})
Tagging.create({track_id: 23, tag_id: 14})
Tagging.create({track_id: 23, tag_id: 15})
Tagging.create({track_id: 23, tag_id: 22})

Track.create({title: 'Forest at Night', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467584462/FelixBlumePack/328293__felix-blume__forest-at-night-crickets-cicadas-and-insects-in-the-sian-ka-an-biosphere-reserve.mp3',
  description: "Crickets, cicadas, and insects. Chirping and humming on the nigth.", downloads: 5, soundscape_id: 5, artist_id: 4})

Tagging.create({track_id: 24, tag_id: 5})
Tagging.create({track_id: 24, tag_id: 12})
Tagging.create({track_id: 24, tag_id: 13})
Tagging.create({track_id: 24, tag_id: 18})
Tagging.create({track_id: 24, tag_id: 14})
Tagging.create({track_id: 24, tag_id: 15})
Tagging.create({track_id: 24, tag_id: 22})

Track.create({title: 'Light Windy Morning', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467584429/FelixBlumePack/328295__felix-blume__forest-at-dawn-with-a-light-wind-in-the-trees-grey-hawk-jay-colibri-birds-crickets-and-insects-in-the-sian-ka-an-biosphere-reserve.mp3',
  description: "Lots of birds in this one! Light wind rolls through an early morning in the forest.", downloads: 2, soundscape_id: 5, artist_id: 4})

Tagging.create({track_id: 25, tag_id: 5})
Tagging.create({track_id: 25, tag_id: 12})
Tagging.create({track_id: 25, tag_id: 13})
Tagging.create({track_id: 25, tag_id: 18})
Tagging.create({track_id: 25, tag_id: 14})
Tagging.create({track_id: 25, tag_id: 15})
Tagging.create({track_id: 25, tag_id: 22})

Track.create({title: 'Sound of the Laguna', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467584276/FelixBlumePack/328299__felix-blume__aquatic-sound-of-the-laguna-from-the-dock-of-playon-in-the-sian-ka-an-biosphere-reserve.mp3',
  description: "Aquatic sound of the laguna from the dock of Playton in the Sian Ka'an biosphere", downloads: 3, soundscape_id: 5, artist_id: 4})

Tagging.create({track_id: 26, tag_id: 4})
Tagging.create({track_id: 26, tag_id: 1})
Tagging.create({track_id: 26, tag_id: 2})
Tagging.create({track_id: 26, tag_id: 12})
Tagging.create({track_id: 26, tag_id: 13})
Tagging.create({track_id: 26, tag_id: 8})
Tagging.create({track_id: 26, tag_id: 20})

Track.create({title: 'Squacking Birds', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467584536/FelixBlumePack/328304__felix-blume__chachalas-birds-screaming-at-dawn-in-the-forest-in-the-sian-ka-an-biosphere-reserve.mp3',
  description: "Chachalas birds screaming at dawn in the forest.", downloads: 2, soundscape_id: 5, artist_id: 4})

Tagging.create({track_id: 27, tag_id: 5})
Tagging.create({track_id: 27, tag_id: 12})
Tagging.create({track_id: 27, tag_id: 13})
Tagging.create({track_id: 27, tag_id: 18})
Tagging.create({track_id: 27, tag_id: 14})
Tagging.create({track_id: 27, tag_id: 15})
Tagging.create({track_id: 27, tag_id: 22})

Track.create({title: 'Aquatic Sound of the Sea', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467584201/FelixBlumePack/328306__felix-blume__aquatic-sound-of-the-sea-from-the-boat-close-to-punta-allen-recife-in-the-sian-ka-an-biosphere-reserve.mp3',
  description: "Aquatic sound of the sea from the boat close to Punta Allen Recife in the Sian Ka'an Biosphere", downloads: 4, soundscape_id: 2, artist_id: 4})

  Tagging.create({track_id: 28, tag_id: 4})
  Tagging.create({track_id: 28, tag_id: 1})
  Tagging.create({track_id: 28, tag_id: 2})
  Tagging.create({track_id: 28, tag_id: 12})
  Tagging.create({track_id: 28, tag_id: 13})
  Tagging.create({track_id: 28, tag_id: 8})
  Tagging.create({track_id: 28, tag_id: 20})

Track.create({title: 'River Running', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467989121/196699__vonfleisch__river-running-water-2_1_bd0i1l.wav',
  description: "Lovely track of a river.", downloads: 14, soundscape_id: 5, artist_id: 2})

Tagging.create({track_id: 29, tag_id: 23})
Tagging.create({track_id: 29, tag_id: 4})
Tagging.create({track_id: 29, tag_id: 8})
Tagging.create({track_id: 29, tag_id: 12})
Tagging.create({track_id: 29, tag_id: 16})
Tagging.create({track_id: 29, tag_id: 20})

Track.create({title: 'Tidepool', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467989056/332171__pyro13djt__water-in-a-pond_ng0co9.ogg',
  description: "Playing in a tidepool on the Pacific.", downloads: 13, soundscape_id: 2, artist_id: 2})

Tagging.create({track_id: 30, tag_id: 1})
Tagging.create({track_id: 30, tag_id: 2})
Tagging.create({track_id: 30, tag_id: 8})
Tagging.create({track_id: 30, tag_id: 12})
Tagging.create({track_id: 30, tag_id: 16})
Tagging.create({track_id: 30, tag_id: 20})


Track.create({title: 'Edge of the Forest', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467988064/135135__inchadney__at-the-edge-of-the-forest_qcyozy.wav',
  description: "I'm standing on the Edge.", downloads: 21, soundscape_id: 5, artist_id: 4})

Tagging.create({track_id: 31, tag_id: 5})
Tagging.create({track_id: 31, tag_id: 12})
Tagging.create({track_id: 31, tag_id: 13})
Tagging.create({track_id: 31, tag_id: 1})
Tagging.create({track_id: 31, tag_id: 15})
Tagging.create({track_id: 31, tag_id: 4})

Track.create({title: 'Old Cassette Player', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467987479/191840__klankbeeld__old-womans-cassette-player-1987_pqdyw7.mp3',
  description: "Conversing over dinner", downloads: 5, soundscape_id: 6, artist_id: 4})

Tagging.create({track_id: 32, tag_id: 19})
Tagging.create({track_id: 32, tag_id: 18})
Tagging.create({track_id: 32, tag_id: 11})
Tagging.create({track_id: 32, tag_id: 7})

Track.create({title: 'Stories of War', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467987479/191840__klankbeeld__old-womans-cassette-player-1987_pqdyw7.mp3',
  description: "Barcelona resident recalling stories of war", downloads: 18, soundscape_id: 6, artist_id: 4})

Tagging.create({track_id: 33, tag_id: 6})
Tagging.create({track_id: 33, tag_id: 7})
Tagging.create({track_id: 33, tag_id: 11})
Tagging.create({track_id: 33, tag_id: 21})
Tagging.create({track_id: 33, tag_id: 18})

Track.create({title: 'Dance Practice', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467987178/187880__sonsdebarcelona__dance-practice_im50po.wav',
  description: "Recording of a local dance class", downloads: 2, soundscape_id: 6, artist_id: 6})

Tagging.create({track_id: 34, tag_id: 6})
Tagging.create({track_id: 34, tag_id: 7})
Tagging.create({track_id: 34, tag_id: 11})
Tagging.create({track_id: 34, tag_id: 24})
Tagging.create({track_id: 34, tag_id: 18})

Track.create({title: 'Setting up Christmas Eve', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467987035/111141__miastodzwiekow__preparing-christmaseve-table-241210_okudxl.mp3',
  description: "Getting ready for a family dinner", downloads: 7, soundscape_id: 6, artist_id: 6})

Tagging.create({track_id: 35, tag_id: 6})
Tagging.create({track_id: 35, tag_id: 7})
Tagging.create({track_id: 35, tag_id: 11})
Tagging.create({track_id: 35, tag_id: 24})
Tagging.create({track_id: 35, tag_id: 19})

Track.create({title: 'Carnival', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467987035/111141__miastodzwiekow__preparing-christmaseve-table-241210_okudxl.mp3',
  description: "Carnival ambiance recorded in Holland", downloads: 12, soundscape_id: 4, artist_id: 1})

Tagging.create({track_id: 36, tag_id: 6})
Tagging.create({track_id: 36, tag_id: 3})
Tagging.create({track_id: 36, tag_id: 11})
Tagging.create({track_id: 36, tag_id: 24})
Tagging.create({track_id: 36, tag_id: 1})

Track.create({title: 'Walk Thru Shop', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467987035/111141__miastodzwiekow__preparing-christmaseve-table-241210_okudxl.mp3',
  description: "Walking down the streets and listening to vendors", downloads: 1, soundscape_id: 4, artist_id: 3})

Tagging.create({track_id: 37, tag_id: 6})
Tagging.create({track_id: 37, tag_id: 17})
Tagging.create({track_id: 37, tag_id: 11})
Tagging.create({track_id: 37, tag_id: 24})
Tagging.create({track_id: 37, tag_id: 16})

Track.create({title: 'Traffic', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467963467/city/173154__inchadney__traffic.mp3',
  description: "Traffic", downloads: 3, soundscape_id: 4, artist_id: 5})

Tagging.create({track_id: 38, tag_id: 7})
Tagging.create({track_id: 38, tag_id: 17})
Tagging.create({track_id: 38, tag_id: 11})
Tagging.create({track_id: 38, tag_id: 21})
Tagging.create({track_id: 38, tag_id: 16})

Track.create({title: 'More traffic', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467963465/city/110310__nickpursehouse__traffic-medium-city-dry-road-xy-90-degrees-recording.mp3',
  description: "More traffic", downloads: 2, soundscape_id: 4, artist_id: 5})

Tagging.create({track_id: 39, tag_id: 7})
Tagging.create({track_id: 39, tag_id: 17})
Tagging.create({track_id: 39, tag_id: 11})
Tagging.create({track_id: 39, tag_id: 21})
Tagging.create({track_id: 39, tag_id: 16})

Track.create({title: 'Under the Underpass', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467963434/city/160001__klangfabrik__highwayunderpass.mp3',
  description: "More traffic", downloads: 1, soundscape_id: 4, artist_id: 1})

Tagging.create({track_id: 40, tag_id: 8})
Tagging.create({track_id: 40, tag_id: 17})
Tagging.create({track_id: 40, tag_id: 3})
Tagging.create({track_id: 40, tag_id: 19})
Tagging.create({track_id: 40, tag_id: 16})

Track.create({title: 'Morocco Marketplace', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467987035/111141__miastodzwiekow__preparing-christmaseve-table-241210_okudxl.mp3',
  description: "Walking down the streets and listening to vendors", downloads: 0, soundscape_id: 4, artist_id: 1})

Tagging.create({track_id: 41, tag_id: 6})
Tagging.create({track_id: 41, tag_id: 17})
Tagging.create({track_id: 41, tag_id: 11})
Tagging.create({track_id: 41, tag_id: 24})
Tagging.create({track_id: 41, tag_id: 3})
Tagging.create({track_id: 41, tag_id: 4})
Tagging.create({track_id: 41, tag_id: 8})

Track.create({title: 'Sazman Marketplace', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467963339/city/7890__sazman__marketplace.mp3',
  description: "Food markey in Sazman. Lots going on! Busy and loud", downloads: 0, soundscape_id: 4, artist_id: 5})

Tagging.create({track_id: 42, tag_id: 21})
Tagging.create({track_id: 42, tag_id: 16})
Tagging.create({track_id: 42, tag_id: 11})
Tagging.create({track_id: 42, tag_id: 24})
Tagging.create({track_id: 42, tag_id: 3})
Tagging.create({track_id: 42, tag_id: 5})
Tagging.create({track_id: 42, tag_id: 10})

Track.create({title: 'Chongnyangyi Market', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467963339/city/7890__sazman__marketplace.mp3',
  description: "Another market", downloads: 9, soundscape_id: 4, artist_id: 5})

Tagging.create({track_id: 43, tag_id: 21})
Tagging.create({track_id: 43, tag_id: 10})
Tagging.create({track_id: 43, tag_id: 11})
Tagging.create({track_id: 43, tag_id: 24})
Tagging.create({track_id: 43, tag_id: 3})
Tagging.create({track_id: 43, tag_id: 5})

Track.create({title: 'Saturday Night Revelry', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467963325/city/106905__bulldozia__saturday-night-revelry.mp3',
  description: "Loud and active Saturday night in the city", downloads: 7, soundscape_id: 4, artist_id: 6})

Tagging.create({track_id: 44, tag_id: 21})
Tagging.create({track_id: 44, tag_id: 10})
Tagging.create({track_id: 44, tag_id: 11})
Tagging.create({track_id: 44, tag_id: 24})
Tagging.create({track_id: 44, tag_id: 3})
Tagging.create({track_id: 44, tag_id: 5})
Tagging.create({track_id: 44, tag_id: 6})

Track.create({title: 'Picnic Fire', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467614579/fire/54945__satoration__preparing-fire-at-the-picnic.mp3',
  description: 'Preparing a fire for a weekend picnic with family', downloads: 5, soundscape_id: 7, artist_id: 1})

Tagging.create({track_id: 45, tag_id: 3})
Tagging.create({track_id: 45, tag_id: 7})
Tagging.create({track_id: 45, tag_id: 20})
Tagging.create({track_id: 45, tag_id: 4})
Tagging.create({track_id: 45, tag_id: 1})

Track.create({title: 'Winter Heat', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467614576/fire/46272__phreaksaccount__fire-medium-loop.mp3',
  description: 'Building a fire to keep warm in the harsh winter', downloads: 10, soundscape_id: 7, artist_id: 3})

Tagging.create({track_id: 46, tag_id: 3})
Tagging.create({track_id: 46, tag_id: 10})
Tagging.create({track_id: 46, tag_id: 20})
Tagging.create({track_id: 46, tag_id: 4})
Tagging.create({track_id: 46, tag_id: 1})

Track.create({title: 'Crackling Fireplace', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467614570/fire/60568__robinhood76__00370-fireplace-1.mp3',
  description: 'Fireplace crackles and pops! Great ambiance, might be a bit distracting to some though.', downloads: 0, soundscape_id: 7, artist_id: 1})

Tagging.create({track_id: 47, tag_id: 7})
Tagging.create({track_id: 47, tag_id: 10})
Tagging.create({track_id: 47, tag_id: 20})
Tagging.create({track_id: 47, tag_id: 5})
Tagging.create({track_id: 47, tag_id: 1})

Track.create({title: 'Campfire', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467614576/fire/46272__phreaksaccount__fire-medium-loop.mp3',
  description: 'Short sample of a fire while camping. Lovely quality, just with my phone had more battery to record more!', downloads: 2, soundscape_id: 7, artist_id: 3})

Tagging.create({track_id: 48, tag_id: 3})
Tagging.create({track_id: 48, tag_id: 10})
Tagging.create({track_id: 48, tag_id: 5})
Tagging.create({track_id: 48, tag_id: 6})

Track.create({title: 'Roaring Forest Fire', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467614555/fire/17548__dynamicell__fire-forest-inferno.mp3',
  description: 'Short clip, but check out this awesome fire!', downloads: 3, soundscape_id: 7, artist_id: 1})

Tagging.create({track_id: 49, tag_id: 7})
Tagging.create({track_id: 49, tag_id: 10})
Tagging.create({track_id: 49, tag_id: 17})
Tagging.create({track_id: 49, tag_id: 5})
Tagging.create({track_id: 49, tag_id: 1})

Track.create({title: 'Tidepool', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467989056/332171__pyro13djt__water-in-a-pond_ng0co9.ogg',
  description: "Playing in a tidepool on the Pacific.", downloads: 4, soundscape_id: 2, artist_id: 2})

Tagging.create({track_id: 50, tag_id: 1})
Tagging.create({track_id: 50, tag_id: 2})
Tagging.create({track_id: 50, tag_id: 8})
Tagging.create({track_id: 50, tag_id: 12})
Tagging.create({track_id: 50, tag_id: 16})
Tagging.create({track_id: 50, tag_id: 20})

Track.create({title: 'Gentle Rain Storm in Meadow', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1467350593/156994__chrscrwfrd18__rain_xat7od.mp3',
  description: "10 minutes of a gentle rain accompanied by field birds. Distant thunder claps interspersed. (10 seconds delayed start to ease in for usage)", downloads: 26, soundscape_id: 1, artist_id: 2})

Tagging.create({track_id: 51, tag_id: 3})
Tagging.create({track_id: 51, tag_id: 9})
Tagging.create({track_id: 51, tag_id: 4})
Tagging.create({track_id: 51, tag_id: 19})
Tagging.create({track_id: 51, tag_id: 8})
Tagging.create({track_id: 51, tag_id: 1})

Track.create({title: 'Wind Chimes', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1468219760/196712__littleboot__wind-chimes_dwhpex.mp3',
  description: "Just messing around with some wind chimes. Going for a light, haunty sound.", downloads: 5, soundscape_id: 3, artist_id: 5})

Tagging.create({track_id: 52, tag_id: 4})
Tagging.create({track_id: 52, tag_id: 19})
Tagging.create({track_id: 52, tag_id: 1})
Tagging.create({track_id: 52, tag_id: 3})

Track.create({title: 'Dark Rain', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1468219824/167881__bradovic__dark-background-sounds_xdcdrc.mp3',
  description: "Ominous sound of rain. Found the quality very interesting mixed with the background sounds", downloads: 2, soundscape_id: 1, artist_id: 2})

Tagging.create({track_id: 53, tag_id: 4})
Tagging.create({track_id: 53, tag_id: 6})
Tagging.create({track_id: 53, tag_id: 20})
Tagging.create({track_id: 53, tag_id: 3})

Track.create({title: 'Mild Storm Thunderclaps', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1468219824/167881__bradovic__dark-background-sounds_xdcdrc.mp3',
  description: "Quiet storm that passed us through. Just ran outside to grab it for y'all! Enjoy!", downloads: 7, soundscape_id: 1, artist_id: 3})

Tagging.create({track_id: 54, tag_id: 4})
Tagging.create({track_id: 54, tag_id: 1})
Tagging.create({track_id: 54, tag_id: 9})
Tagging.create({track_id: 54, tag_id: 3})

Track.create({title: 'Spring Rain', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1468219824/167881__bradovic__dark-background-sounds_xdcdrc.mp3',
  description: "Gentle early spring rain. Recorded with a HPC794 AudioMAXTER693.", downloads: 7, soundscape_id: 1, artist_id: 3})

Tagging.create({track_id: 55, tag_id: 4})
Tagging.create({track_id: 55, tag_id: 1})
Tagging.create({track_id: 55, tag_id: 9})
Tagging.create({track_id: 55, tag_id: 3})

Track.create({title: 'Crackling Thunder', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1468219873/169158__joniheinonen__weather-thunder-lightning-loud-crackling-thunder-in-mid-sized-quiet-city-some-seagulls-0001_u7skzn.mp3',
  description: "Gorgeous thunder cracklings over a steady rain. Perfect study sounds.", downloads: 33, soundscape_id: 1, artist_id: 3})

Tagging.create({track_id: 56, tag_id: 4})
Tagging.create({track_id: 56, tag_id: 1})
Tagging.create({track_id: 56, tag_id: 9})
Tagging.create({track_id: 56, tag_id: 3})
Tagging.create({track_id: 56, tag_id: 18})
Tagging.create({track_id: 56, tag_id: 17})

Track.create({title: 'Heavy Storm', track_url: 'http://res.cloudinary.com/soundscape/video/upload/v1468219910/169159__joniheinonen__weather-thunder-drips-thunder-medium-rain-water-dripping-to-concrete-0001_crhfnj.mp3',
  description: "Powerful thunderstorm moving over the midwest.", downloads: 33, soundscape_id: 1, artist_id: 3})

Tagging.create({track_id: 57, tag_id: 4})
Tagging.create({track_id: 57, tag_id: 1})
Tagging.create({track_id: 57, tag_id: 9})
Tagging.create({track_id: 57, tag_id: 3})
Tagging.create({track_id: 57, tag_id: 18})
Tagging.create({track_id: 57, tag_id: 17})

Track.create({title: 'Extended Chimes', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1468219900/196015__mc2method__wind-chimes_rogdxy.mp3',
  description: "Longer more elaborate version of my first recording. Decided to try more active chimes this time.", downloads: 14, soundscape_id: 3, artist_id: 5})

Tagging.create({track_id: 58, tag_id: 4})
Tagging.create({track_id: 58, tag_id: 19})
Tagging.create({track_id: 58, tag_id: 1})
Tagging.create({track_id: 58, tag_id: 3})

Track.create({title: 'Courtyard Thunder', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1468220000/169157__joniheinonen__weather-thunder-heavy-thunder-medium-rain-courtyard-echoes-0001_aty3km.mp3',
  description: "Storm echoes through the courtyard for a nice reverby effect.", downloads: 15, soundscape_id: 1, artist_id: 6})

Tagging.create({track_id: 59, tag_id: 4})
Tagging.create({track_id: 59, tag_id: 1})
Tagging.create({track_id: 59, tag_id: 9})
Tagging.create({track_id: 59, tag_id: 3})
Tagging.create({track_id: 59, tag_id: 18})
Tagging.create({track_id: 59, tag_id: 17})

Track.create({title: 'Creaking Oak', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1468220048/211776__klankbeeld__piezo-cracking-oak-tree-131223-00_oczsrs.mp3',
  description: "Old oak tree creaking in the wind.. Spooky.", downloads: 25, soundscape_id: 3, artist_id: 5})

Tagging.create({track_id: 60, tag_id: 4})
Tagging.create({track_id: 60, tag_id: 19})
Tagging.create({track_id: 60, tag_id: 12})
Tagging.create({track_id: 60, tag_id: 18})

Track.create({title: 'Cans in the Wind', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1468220048/211776__klankbeeld__piezo-cracking-oak-tree-131223-00_oczsrs.mp3',
  description: "Put some cans in the wind and let nature play them.", downloads: 0, soundscape_id: 3, artist_id: 6})

Tagging.create({track_id: 61, tag_id: 4})
Tagging.create({track_id: 61, tag_id: 17})
Tagging.create({track_id: 61, tag_id: 12})
Tagging.create({track_id: 61, tag_id: 16})

Track.create({title: 'Gulf Waves', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1468224012/255153__the-toilet-guy__ocean-waves-in-the-gulf-of-mexico_tewefp.mp3',
  description: "Waves crashing over a beach on the Gulf of Mexico", downloads: 30, soundscape_id: 2, artist_id: 2})

Tagging.create({track_id: 62, tag_id: 20})
Tagging.create({track_id: 62, tag_id: 4})
Tagging.create({track_id: 62, tag_id: 2})
Tagging.create({track_id: 62, tag_id: 8})
Tagging.create({track_id: 62, tag_id: 1})

Track.create({title: 'Ocean Pulau', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1468224077/257822__rtb45__jungle-meets-ocean-pulau-seram-indonesia_fpx1sp.mp3',
  description: "water and waves in Indonesia", downloads: 10, soundscape_id: 2, artist_id: 2})

Tagging.create({track_id: 63, tag_id: 3})
Tagging.create({track_id: 63, tag_id: 4})
Tagging.create({track_id: 63, tag_id: 2})
Tagging.create({track_id: 63, tag_id: 1})

Track.create({title: 'Shoreline Mondays', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1468224032/254857__afeeto__waves-against-shore_dypohj.mp3',
  description: "Intended as light listening over Monday coffee", downloads: 15, soundscape_id: 2, artist_id: 2})

Tagging.create({track_id: 64, tag_id: 3})
Tagging.create({track_id: 64, tag_id: 4})
Tagging.create({track_id: 64, tag_id: 2})
Tagging.create({track_id: 64, tag_id: 16})
Tagging.create({track_id: 64, tag_id: 1})

Track.create({title: 'Sailboat', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1468224054/252670__augustsandberg__sailboat-sailing-interior-2_g3w99z.mp3',
  description: "Ocean sounds captured on a sailing trip", downloads: 27, soundscape_id: 2, artist_id: 2})

Tagging.create({track_id: 65, tag_id: 3})
Tagging.create({track_id: 65, tag_id: 4})
Tagging.create({track_id: 65, tag_id: 2})
Tagging.create({track_id: 65, tag_id: 8})
Tagging.create({track_id: 65, tag_id: 1})

Track.create({title: 'Waves pt.1', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1468224033/278986__inchadney__cambo-sands_qbathf.mp3',
  description: "Just some good ol' waves", downloads: 13, soundscape_id: 2, artist_id: 2})

Tagging.create({track_id: 66, tag_id: 3})
Tagging.create({track_id: 66, tag_id: 4})
Tagging.create({track_id: 66, tag_id: 2})
Tagging.create({track_id: 66, tag_id: 8})
Tagging.create({track_id: 66, tag_id: 1})

Track.create({title: 'Waves pt.2', track_url: 'https://res.cloudinary.com/soundscape/video/upload/v1468224098/197792__drni__fehmarn-sea-waves-404-1_no3muv.mp3',
  description: "Just some more waves. Waves are great.", downloads: 16, soundscape_id: 2, artist_id: 2})

Tagging.create({track_id: 67, tag_id: 3})
Tagging.create({track_id: 67, tag_id: 4})
Tagging.create({track_id: 67, tag_id: 2})
Tagging.create({track_id: 67, tag_id: 8})
Tagging.create({track_id: 67, tag_id: 1})
