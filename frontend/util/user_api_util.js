module.exports = {
  fetchUser(id, success) {
    $.ajax({
      url: `api/users/${id}`,
      success: function(response) {
        success(response)
      }
    });
  },

  fetchAllUsers(success) {
    $.ajax({
      url: `api/users`,
      success: function(response) {
        success(response)
      }
    })
  }
}
