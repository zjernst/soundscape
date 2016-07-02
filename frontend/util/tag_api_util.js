module.exports = {
  fetchAllTags(success) {
    $.ajax({
      url: 'api/tags',
      success: function(res) {
        success(res)
      }
    });
  },

  getTag(id, success) {
    $.ajax({
      url: `api/tags/${id}`,
      success: function(res) {
        success(res)
      }
    });
  },

  createTag(tag, success) {
    $.ajax({
      url: 'api/tags',
      type: 'POST',
      dataType: 'json',
      data: {tag: tag},
      success(res) {
        success(res);
      }
    });
  },

  updateTag(tag, success) {
    $.ajax({
      url: `api/tags/${tag.id}`,
      type: 'PATCH',
      dataType: 'json',
      data: {tag: tag},
      success(res) {
        success(res);
      }
    });
  }
}
