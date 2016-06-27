# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Track Cycles

### Tracks API Request Actions

* `fetchAllTracks`
  0. invoked from `TracksIndex` `didMount`/`willReceiveProps`
  0. `GET /api/tracks` is called.
  0. `receiveAllTracks` is set as the callback.

* `createTrack`
  0. invoked from new track button `onClick`
  0. `POST /api/tracks` is called.
  0. `receiveSingleTrack` is set as the callback.

* `fetchSingleTrack`
  0. invoked from `TrackDetail` `didMount`/`willReceiveProps`
  0. `GET /api/tracks/:id` is called.
  0. `receiveSingleTrack` is set as the callback.

* `updateTrack`
  0. invoked from `TrackForm` `onSubmit`
  0. `POST /api/tracks` is called.
  0. `receiveSingleTrack` is set as the callback.

* `destroyTrack`
  0. invoked from delete track button `onClick`
  0. `DELETE /api/tracks/:id` is called.
  0. `removeTrack` is set as the callback.

### Tracks API Response Actions

* `receiveAllTracks`
  0. invoked from an API callback.
  0. `Track` store updates `_tracks` and emits change.

* `receiveSingleTrack`
  0. invoked from an API callback.
  0. `Track` store updates `_tracks[id]` and emits change.

* `removeTrack`
  0. invoked from an API callback.
  0. `Track` store removes `_tracks[id]` and emits change.

### Store Listeners

* `TracksIndex` component listens to `Track` store.
* `TrackDetail` component listens to `Track` store.


## Environment Cycles

### Environments API Request Actions

* `fetchAllEnvironments`
  0. invoked from `EnvironmentsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/environments` is called.
  0. `receiveAllEnvironments` is set as the callback.

* `fetchSingleEnvironment`
  0. invoked from `EnvironmentDetail` `didMount`/`willReceiveProps`
  0. `GET /api/environments/:id` is called.
  0. `receiveSingleEnvironment` is set as the callback.

* `updateEnvironment`
  0. invoked from `EnvironmentForm` `onSubmit`
  0. `POST /api/environments` is called.
  0. `receiveSingleEnvironment` is set as the callback.

### Environments API Response Actions

* `receiveAllEnvironments`
  0. invoked from an API callback.
  0. `Environment` store updates `_environments` and emits change.

* `receiveSingleEnvironment`
  0. invoked from an API callback.
  0. `Environment` store updates `_environments[id]` and emits change.


### Store Listeners

* `EnvironmentsIndex` component listens to `Environment` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `TrackSearchBar` `onChange` when there is text
  0. `GET /api/tracks` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `TrackSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
