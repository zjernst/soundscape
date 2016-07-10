const TrackApiUtil = require('../util/track_api_util');
const TrackConstants = require('../constants/track_constants');
const SoundscapeApiUtil = require('../util/soundscape_api_util');
const SoundscapeActions = require('../actions/soundscape_actions');
const SoundscapeConstants = require('../constants/soundscape_constants');
const Dispatcher = require('../dispatcher/dispatcher');

const TrackActions = {
  createTrack(track) {
    TrackApiUtil.createTrack(track, TrackActions.receiveTrack)
  },

  getTrack(id) {
    TrackApiUtil.getTrack(id, TrackActions.receiveTrack)
  },

  deleteTrack(id) {
    TrackApiUtil.deleteTrack(id, TrackActions.removeTrack)
  },

  editTrack(track) {
    TrackApiUtil.updateTrack(track, TrackActions.receiveTrack)
  },

  receiveTrack(track) {
    Dispatcher.dispatch({
      actionType: TrackConstants.TRACK_RECEIVED,
      track: track
    })
  },

  removeTrack(track) {
    Dispatcher.dispatch({
      actionType: TrackConstants.REMOVE_TRACK,
      track: track
    })
  },

  dropTrack(track) {
    Dispatcher.dispatch({
      actionType: TrackConstants.DROP_TRACK,
      track: track
    })
  },

  updateTracks(tracks) {
    Dispatcher.dispatch({
      actionType: TrackConstants.UPDATE_TRACKS,
      tracks: tracks
    })
  },

  addTrack(track) {
    Dispatcher.dispatch({
      actionType: TrackConstants.ADD_TRACK,
      track: track
    })
  },

  setPlaying(track) {
    Dispatcher.dispatch({
      actionType: TrackConstants.SET_PLAYING,
      track: track
    })
  }
}

module.exports = TrackActions;
