const ErrorActions = require('../actions/error_actions');

module.exports = {
  login(user, success) {
    $.ajax({
      url: '/api/session',
      type: 'POST',
      data: {user: user},
      success: function(res) {
        success(res);
        ErrorActions.resetErrors();
      },
      error: function(res) {
        const errors = res.responseJSON
        ErrorActions.receiveErrors(errors)
      }
    });
  },

  logout(success) {
    $.ajax({
      url: '/api/session',
      method: 'DELETE',
      success: success,
      error: function() {
        console.log("Logout error in session api util")
      }
    });
  },

  signup(user, success) {
    $.ajax({
      url: 'api/users',
      type: 'POST',
      dataType: 'json',
      data: {user: user},
      success: function(res) {
        success(res);
        ErrorActions.resetErrors();
      },
      error: function(res) {
        ErrorActions.receiveErrors(res.responseJSON)
      }
    });
  },

  fetchCurrentUser(success) {
    $.ajax({
      url: '/api/session',
      method: 'GET',
      success: success,
      error: function(res) {
        console.log("error in SessionApiUtil#fetchCurrentUser")
      }
    });
  }
}
