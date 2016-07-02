const TagApiUtil = require('../util/tag_api_util');
const Dispatcher = require('../dispatcher/dispatcher');
const TagConstants = require('../constants/tag_constants');

const TagActions = {
  createTag(tag) {
    TagApiUtil.createTag(tag, TagActions.receiveSingleTag)
  },

  fetchAllTags() {
    TagApiUtil.fetchAllTags(TagActions.receiveAllTags)
  },

  getTag(id) {
    TagApiUtil.getTag(id, TagActions.receiveSingleTag)
  },

  receiveAllTags(tags) {
    Dispatcher.dispatch({
      actionType: TagConstants.TAGS_RECEIVED,
      tags: tags
    })
  },

  receiveSingleTag(tag) {
    Dispatcher.dispatch({
      actionType: TagConstants.SINGLE_TAG_RECEIVED,
      tag: tag
    })
  }
};

module.exports = TagActions;
