const TagConstants = require('../constants/tag_constants');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;

let _tags = {};

const TagStore = new Store(AppDispatcher);

TagStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case TagConstants.TAGS_RECEIVED:
      resetTags(payload.tags);
      TagStore.__emitChange();
      break;
    case TagConstants.SINGLE_TAG_RECEIVED:
      addTag(payload.tag);
      TagStore.__emitChange();
      break;
  }
};

TagStore.all = function() {
  let tags = [];
  let keys = Object.keys(_tags);
  for (var i = 0; i < keys.length; i++) {
    tags.push(_tags[keys[i]]);
  }
  return tags
};

function resetTags(tags) {
  _tags = {};
  tags.forEach( (tag) => {
    _tags[tag.id] = tag
  });
};

function addTag(tag) {
  _tags[tag.id] = tag
};

module.exports = TagStore;
