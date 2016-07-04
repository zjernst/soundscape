const FilterConstants = require('../constants/filter_constants');
const Dispatcher = require('../dispatcher/dispatcher');
const TrackApiUtil = require('../util/track_api_util');

const FilterActions = {
  fetchAllTracks(filters) {
    TrackApiUtil.fetchAllTracks(filters, FilterActions.receiveAllTracks)
  },

  receiveAllTracks(tracks) {
    Dispatcher.dispatch({
      actionType: FilterConstants.ALL_TRACKS,
      tracks: tracks
    })
  },

  tagFilter(tag) {
    Dispatcher.dispatch({
      actionType: FilterConstants.TAG_FILTER,
      tag_id: tag
    })
  },

  updateResults(tag_ids) {
    Dispatcher.dispatch({
      actionType: FilterConstants.FILTER_BY_TAGS,
      tag_ids: tag_ids
    })
  }

  // updateResults(tag_ids) {
  //   TrackApiUtil.fetchAllTracks(FilterActions.receiveAllTracks);
  //
  //   tag_ids.forEach((id) => {
  //     FilterActions.tagFilter(id)
  //   })
  // }
};

module.exports = FilterActions;
