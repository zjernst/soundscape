module.exports = {
  fetchAllTracks(success) {
    $.ajax({
      url: 'api/tracks',
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
        success(res.soundscape_id);
      }
    });
  },

  deleteTrack(id, success) {
    $.ajax({
      url: `api/tracks/${id}`,
      type: 'DELETE',
      success(res) {
        success(res.soundscape_id);
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
        success(res.soundscape_id);
      }
    });
  }
}
