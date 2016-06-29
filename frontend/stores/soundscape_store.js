const SoundscapeConstants = require('../constants/soundscape_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;


let _soundscapes = {}

const SoundscapeStore = new Store(AppDispatcher);

SoundscapeStore.all = function() {
  let soundscapes = [];
  let keys = Object.keys(_soundscapes);
  for (var i = 0; i < keys.length; i++) {
    soundscapes.push(_soundscapes[keys[i]]);
  }
  return soundscapes
};

SoundscapeStore.find = function(id) {
  return _soundscapes[id];
};

SoundscapeStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SoundscapeConstants.ALL_SOUNDSCAPES_RECEIVED:
      resetSoundscapes(payload.soundscapes);
      SoundscapeStore.__emitChange();
      break;
    case SoundscapeConstants.SOUNDSCAPE_RECEIVED:
      addSoundscape(payload.soundscape);
      SoundscapeStore.__emitChange();
      break;
  }
};

function addSoundscape(soundscape) {
  _soundscapes[soundscape.id] = soundscape;
};

function resetSoundscapes(soundscapes) {
  _soundscapes = {};
  soundscapes.forEach( (soundscape) => {
    _soundscapes[soundscape.id] = soundscape
  });
};



module.exports = SoundscapeStore;
