const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const UserConstants = require('../constants/user_constants');

let _users = {};

const UserStore = new Store(AppDispatcher);

function resetUsers(users) {
  _users = {};
  users.forEach( (user) => {
    _users[user.id] = user
  });
};

function addUser(user) {
  _users[user.id] = user
};

UserStore.all = function() {
  let users = [];
  let keys = Object.keys(_users);
  for (var i = 0; i < keys.length; i++) {
    users.push(_users[keys[i]]);
  }
  return users
};

UserStore.find = function(id) {
  return Object.assign({}, _users[id]);
};

UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.RECEIVE_ALL_USERS:
      resetUsers(payload.users);
      UserStore.__emitChange();
      break;
    case UserConstants.RECEIVE_USER:
      addUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
