const SoundscapeApiUtil = require('../util/soundscape_api_util');
const Dispatcher = require('../dispatcher/dispatcher');
const SoundscapeConstants = require('../constants/soundscape_constants');

const SoundscapeActions = {
  fetchAllSoundscapes() {
    SoundscapeApiUtil.fetchAllSoundscapes(SoundscapeActions.receiveAllSoundscapes)
  },

  getSoundscape(id) {
    SoundscapeApiUtil.getSoundscape(id, SoundscapeActions.receiveSingleSoundscape)
  },

  receiveAllSoundscapes(soundscapes) {
    Dispatcher.dispatch({
      actionType: SoundscapeConstants.ALL_SOUNDSCAPES_RECEIVED,
      soundscapes: soundscapes
    })
  },

  receiveSingleSoundscape(soundscape) {
    Dispatcher.dispatch({
      actionType: SoundscapeConstants.SOUNDSCAPE_RECEIVED,
      soundscape: soundscape
    })
  }
};

module.exports = SoundscapeActions;
