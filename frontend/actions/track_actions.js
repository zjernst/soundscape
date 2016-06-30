const TrackApiUtil = require('../util/track_api_util');
const TrackConstants = require('../constants/track_constants');
const SoundscapeApiUtil = require('../util/soundscape_api_util');
const SoundscapeActions = require('../actions/soundscape_actions');
const SoundscapeConstants = require('../constants/soundscape_constants');
const Dispatcher = require('../dispatcher/dispatcher');

const TrackActions = {
  createTrack(track) {
    TrackApiUtil.createTrack(track, SoundscapeActions.getSoundscape)
  }
}

module.exports = TrackActions;
