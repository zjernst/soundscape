module.exports = {
  login(user, success, error) {
    $.ajax({
      url: 'api/session',
      type: 'POST',
      data: {user: user},
      success,
      error(res) {
        error("login", res.responseJSON)
      }
    });
  },

  logout(success) {
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      success,
      error: function() {
        console.log("Logout error in session api util")
      }
    });
  },

  signup(user, success, error) {
    $.ajax({
      url: 'api/users',
      type: 'POST',
      dataType: 'json',
      data: {user: user},
      success,
      error(res) {
        error("signup", res.responseJSON)
      }
    });
  },

  fetchCurrentUser(success, complete) {
    $.ajax({
      url: 'api/session',
      method: 'GET',
      success,
      error: function(res) {
        console.log("error in SessionApiUtil#fetchCurrentUser")
      },
      complete: function() {
        complete();
      }
    });
  }
}
