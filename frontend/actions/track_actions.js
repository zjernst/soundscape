const TrackApiUtil = require('../util/track_api_util');
const TrackConstants = require('../constants/track_constants');
const SoundscapeApiUtil = require('../util/soundscape_api_util');
const SoundscapeActions = require('../actions/soundscape_actions');
const SoundscapeConstants = require('../constants/soundscape_constants');
const Dispatcher = require('../dispatcher/dispatcher');

const TrackActions = {
  createTrack(track) {
    TrackApiUtil.createTrack(track, SoundscapeActions.getSoundscape)
  },

  getTrack(id) {
    TrackApiUtil.getTrack(id, TrackActions.receiveTrack)
  },

  receiveTrack(track) {
    Dispatcher.dispatch({
      actionType: TrackConstants.TRACK_RECEIVED,
      track: track
    })
  },

  updateTracks(tracks) {
    Dispatcher.dispatch({
      actionType: TrackConstants.UPDATE_TRACKS,
      tracks: tracks
    })
  }
}

module.exports = TrackActions;
