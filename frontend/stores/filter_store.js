const FilterConstants = require('../constants/filter_constants');
const TrackConstants = require('../constants/track_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;

let _tracks = {};
let _filters = [];
const FilterStore = new Store(AppDispatcher);

FilterStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case FilterConstants.ALL_TRACKS:
      resetTracks(payload.tracks);
      FilterStore.__emitChange();
      break;
    case FilterConstants.TAG_FILTER:
      filterByTag(payload.tag_id);
      FilterStore.__emitChange();
      break;
    case FilterConstants.FILTER_BY_TAGS:
      updateFilters(payload.tag_ids);
      FilterStore.__emitChange();
    case TrackConstants.TRACK_RECEIVED:
      setTrack(payload.track);
      FilterStore.__emitChange();
      break;
    case TrackConstants.REMOVE_TRACK:
      removeTrack(payload.track);
      FilterStore.__emitChange();
  }
};

FilterStore.all = function() {
  let tracks = []
  let keys = Object.keys(_tracks);
  for (let i = 0; i < keys.length; i++) {
    tracks.push(_tracks[keys[i]])
  }
  return tracks
};

// FilterStore.filtered = function() {
//   let tracks = [];
//   _tracks.forEach((track) => {
//     let track_tags = track.tags.map((tag) => tag.id)
//     let adding = true
//     _filters.forEach((tag) => {
//       if (!track_tags.includes(tag)) {
//         adding = false
//       }
//     })
//     if (adding) { tracks.push(track) }
//   })
//   return tracks
// };

FilterStore.filters = function() {
  return _filters.slice();
}

function updateFilters(tag_ids) {
  _filters = tag_ids;
};

function resetTracks(tracks) {
  _tracks = {};
  tracks.forEach((track) => {
    _tracks[track.id] = track
  })
};

function setTrack(track) {
  _tracks[track.id] = track;
};

function removeTrack(track) {
  delete _tracks[track.id];
}


//
// function filterByTag(tag_id) {
//   let tracks = [];
//   _tracks.forEach((track) => {
//     let tag_ids = track.tags.map((tag) => tag.id)
//     if (tag_ids.includes(tag_id)) {
//       tracks.push(track)
//     }
//   })
//   _tracks = tracks;
// };



module.exports = FilterStore;
