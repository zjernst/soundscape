# Soundscape

[link] https://soundscape.online


Soundscape is a full-stack web application inspired by popular online music
applications such as Bandcamp, Last.fm, and Soundcloud. However, instead of playing
popular music, Soundscape serves as an online platform to explore, upload, and share
ambient and natural sounds. It utilizes Ruby on Rails on the backend, a PostgreSQL
database, and React.js with a Flux architectural framework on the frontend.

## Features and Implementation

### Single-Page App

All Soundscape content is rendered on the same static page. Components mount and
unmount as necessary all through user interaction. This design allows the audio
player to remain active and unaffected even while navigating through the site.

### Audio Player

Soundscape supports an audio player built on-top of React-Player. The player
supports play, pause, stop, mute, and draggable seeking. In conjunction with a
playlist component, is also keeps a record of tracks in the queue that allow
responsive next and back capability. Playlists are able to be built up through
ease of use one-press buttons that add 5 randomized sample tracks from one of
the eight soundscape categories or, for the more detail focused, manually by
utilizing search, sort, and filter functionality to create the perfect, curated,
playlist.

### Filtering

Soundscape boasts powerful filtering and search functionality to find the perfect
track. Through a combination of soundscapes, tags, and artists, users are able to
filter through the database through a chain of Activerecord relations on the
backend. On top of this, Soundscape allows the ability to search within these
results with an input field that matches Title and Description columns in the
Tracks database. This flexibility allows searches ranging from all tracks
tagged as calm under the ocean, rain, wind, and forest soundscapes or as
specific as looking for a city track by a known artist that has tags of 'busy',
'loud', 'sharp', 'voices', and 'rumbling' that contains the string "recording
of a carnival in Morocco" in the description.

### Tags

Often, you don't know what the title of the sound you're looking for
will be -- but you know how to /describe/ it. Soundscape implements a tagging
system to tackle and streamline the searching process. A Tagging join table
works as the mediator linking Tracks and Tags. Tags are able to be added and
edited through during Track creation and editing.

### Upload and Download

More than just providing a clean interface to listen to ambient sounds,
Soundscape is built around the concept of sharing. Utilizing Cloudinary, users
can easily upload their own sounds and efficiently add them to the database.
Users can also download any track hosted for their own personal use. Think of
Soundscape as a sharing platform that lets you interact with the world at an
aural level.


## Future Directions for Soundscape

Soundscape has a roster of features -- but there is always room to build. I
intend to continue to iterate on Soundscape turning it into a truly comprehensive
application.

### Improved Community Features

Currently, users have a user page that displays the tracks they have uploaded.
I want to build upon this, adding multitude of user stats utilizing backend
database queries. Provide users with incentive to find and upload new sounds,
and serve as a platform for the sound-enthusiast community. Beefed up profiles,
Likes, Friends, and models for discovering similar Artists are intended steps in
this direction.

### Improved Filter and Track Ratings

Users should be able to rate tracks, and this feature could be added to the
search system. Other improvements to filtering to be implemented include sorting
by downloads, uploads, and new additions.



### Bonus Features
- implement and build out additional components, flux cycles, API for:
  - [ ] welcome
  - [ ] info
  - [ ] community
- [ ] community features
- [ ] multiple sessions
- [ ] purchase track functionality
