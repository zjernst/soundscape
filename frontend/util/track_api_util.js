const ErrorActions = require('../actions/error_actions');

module.exports = {
  fetchAllTracks(filters, success) {
    $.ajax({
      url: 'api/tracks',
      data: filters,
      success: function(res) {
        success(res)
      }
    });
  },

  getTrack(id, success) {
    $.ajax({
      url: `api/tracks/${id}`,
      success: function(res) {
        success(res)
      }
    });
  },

  createTrack(track, success) {
    $.ajax({
      url: 'api/tracks',
      type: 'POST',
      dataType: 'json',
      data: {track: track},
      success(res) {
        success(res);
        ErrorActions.resetErrors();
      },
      error(res) {
        const errors = res.responseJSON;
        ErrorActions.receiveErrors(errors);
      }
    });
  },

  deleteTrack(id, success) {
    $.ajax({
      url: `api/tracks/${id}`,
      type: 'DELETE',
      success(res) {
        success(res);
      }
    })
  },

  updateTrack(track, success) {
    $.ajax({
      url: `api/tracks/${track.id}`,
      type: 'PATCH',
      dataType: 'json',
      data: {track: track},
      success(res) {
        success(res);
      }
    });
  }
}
