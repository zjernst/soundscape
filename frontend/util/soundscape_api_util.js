module.exports = {
  fetchAllSoundscapes(success) {
    $.ajax({
      url: 'api/soundscapes',
      success: function(res) {
        success(res)
      }
    });
  },

  getSoundscape(id, success) {
    $.ajax({
      url: `api/soundscapes/${id}`,
      success: function(res) {
        success(res)
      }
    })
  }
}
