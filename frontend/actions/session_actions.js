const AppDispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const hashHistory = require('react-router').hashHistory;

module.exports = {
  signup(formData) {
    SessionApiUtil.signup(
      formData,
      this.receiveCurrentUser
    );
  },

  login(formData) {
    SessionApiUtil.login(
      formData,
      this.receiveCurrentUser
    );
  },

  logout() {
    SessionApiUtil.logout(this.removeCurrentUser);
  },

  fetchCurrentUser() {
    SessionApiUtil.fetchCurrentUser(this.receiveCurrentUser);
  },

  receiveCurrentUser(currentUser) {
    debugger
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: currentUser
    });
  },

  removeCurrentUser() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
  }
};
