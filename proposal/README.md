# SoundScape

[Heroku link] **to be implemented**

## Minimum Viable Product

SoundScape is a web application inspired by Bandcamp, with a twist focusing on
natural and ambient sounds. Users will be able to upload and share the sounds
of their environment. SoundScape will be built using Ruby on Rails and React.js.
By the end of Week 9, this app will, at minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest login
- [ ] A production README
- [ ] Tracks
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Environments(/Artists) page
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Song Player
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Search
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Upload/download tracks
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [React Components]
* [Flux Cycles]
* [Wireframes]
* [API endpoints]
* [DB schema]

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective** Functioning rails project with auth

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages

### Phase 2: Environments and Tracks Model, API, basic APIUtil (1.5 day, W1 Th 12pm)

**Objective** Tracks can be created/read/update/destroyed through API

- [ ] create `Track` and `Environment` models
- [ ] seed database sample data
- [ ] CRUD API for tracks
- [ ] setup `APIUtil` to interact with the API

### Phase 3: Flux and Router Setup (1 day, W1 F 12pm)

**Objective** Tracks can be fully interacted with through user interface

- [ ] setup flux loop
- [ ] setup React Router
- implement each track component
  - [ ] `TrackIndex`
  - [ ] `TrackIndexItem`
  - [ ] `TrackForm`

### Phase 4: Upload and Play Tracks (0.5 days, W1 F 6pm)

**Objective** Tracks are able to be uploaded and played back

- [ ] implement ability to upload track during track creation
- [ ] implement an existing API to playback music from database
- [ ] add music player

### Phase 5: Users (1 days, W2 M 6pm)

**Objective** Users have a page, collection, and playlists

- build out API, Flux loop, and components for:
  - [ ] Users have UserPage
  - [ ] collections
  - [ ] playlists
- style user pages

### Phase 6: Styling (1 days, W2 Tu 6pm)

**Objective** Index, Sign-in, Environments, User, Track pages all styled

- [ ] revise previous stylings
- satisfying styling needs to:
  - [ ] front page
  - [ ] environment index
  - [ ] track index
  - [ ] user page

### Phase 7: Tags and Search (1.5 day, W2 Th 12pm)

**Objective** Tracks can be tagged and searched and filtered by tag

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for tracks
  - [ ] adding tags to tracks
  - [ ] searching tracks by tag
- [ ] implement search and sort components

### Phase 7: Extra Components (1 days, W2 Wed 6pm)

**Objective** Build out extras to help site feel alive and legitimate

- [ ] implement and build out welcome component, flux cycles, API
- [ ] implement and build out additional info component, flux cycles, API
- [ ] implement and build out community component, flux cycles, API
