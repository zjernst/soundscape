const TrackConstants = require('../constants/track_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;

let _tracks = [];
const TrackStore = new Store(AppDispatcher);

TrackStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case TrackConstants.TRACK_RECEIVED:
      addTrack(payload.track);
      TrackStore.__emitChange();
      break;

    case TrackConstants.UPDATE_TRACKS:
      resetTracks(payload.tracks);
      TrackStore.__emitChange();
      break;

    case TrackConstants.REMOVE_TRACK:
      removeTrack(payload.track);
      TrackStore.__emitChange();
      break;

    case TrackConstants.ADD_TRACK:
      addTrack(payload.track);
      TrackStore.__emitChange();
      break;

    case TrackConstants.SET_PLAYING:
      setPlaying(payload.track);
      TrackStore.__emitChange();
      break;
  }
}

TrackStore.all = function() {
  return _tracks.slice();
};

function removeTrack(track) {
  let idx = _tracks.indexOf(track)
  _tracks.splice(idx, 1);
};

function resetTracks(tracks) {
  _tracks = tracks;
};

function addTrack(track) {
  if (_tracks.indexOf(track) === -1) {
    _tracks.push(track);
  }
};

function setPlaying(track) {
  let idx = _tracks.indexOf(track);
  if (idx !== -1) {
    _tracks.splice(idx, 1);
  }
  _tracks.unshift(track);
};

module.exports = TrackStore;
