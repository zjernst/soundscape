const FilterConstants = require('../constants/filter_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;

let _filteredTracks = [];
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
  }
};

FilterStore.all = function() {
  return _filteredTracks.slice();
};

FilterStore.filtered = function() {
  let tracks = [];
  _filteredTracks.forEach((track) => {
    let track_tags = track.tags.map((tag) => tag.id)
    let adding = true
    _filters.forEach((tag) => {
      if (!track_tags.includes(tag)) {
        adding = false
      }
    })
    if (adding) { tracks.push(track) }
  })
  return tracks
};

FilterStore.filters = function() {
  return _filters.slice();
}

function updateFilters(tag_ids) {
  _filters = tag_ids;
};

function filterByTag(tag_id) {
  let tracks = [];
  _filteredTracks.forEach((track) => {
    let tag_ids = track.tags.map((tag) => tag.id)
    if (tag_ids.includes(tag_id)) {
      tracks.push(track)
    }
  })
  _filteredTracks = tracks;
};

function resetTracks(tracks) {
  _filteredTracks = tracks
};


module.exports = FilterStore;
