const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');
const hashHistory = require('react-router').hashHistory;

const SessionStore = new Store(AppDispatcher);

let _currentUser = {};

function _login(user) {
  _currentUser = user;
};

function _logout() {
  _currentUser = {};
};

SessionStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.user);
      SessionStore.__emitChange();
      // hashHistory.push('/index');
      break;
    case SessionConstants.LOGOUT:
      _logout();
      SessionStore.__emitChange();
      break;
  }
};

SessionStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

SessionStore.isUserLoggedIn = function() {
  return !!_currentUser.id;
};

module.exports = SessionStore;
