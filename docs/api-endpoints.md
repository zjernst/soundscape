# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Environment

- `GET /api/environment`
  - Environment index/search
- `POST /api/environment`
- `GET /api/environment/:id`
- `PATCH /api/environment/:id`
- `DELETE /api/environment/:id`

### Tracks

- `GET /api/tracks`
- `POST /api/tracks`
- `GET /api/tracks/:id`
- `PATCH /api/tracks/:id`
- `DELETE /api/tracks/:id`
- `GET /api/environments/:id/tracks`
  - index of all tracks for an environment

### Tags

- A track's tags will be included in the environment show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- Tags will be attached to tracks and created/destroyed on Track form


* ***BONUS***

### Welcomes

- `GET /api/welcomes`
- `POST /api/welcomes`
- `GET /api/welcomes/:id`
- `PATCH /api/welcomes/:id`
- `DELETE /api/welcomes/:id`
