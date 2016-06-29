const UserConstants = require('../constants/user_constants');
const Dispatcher = require('../dispatcher/dispatcher');
const UserApiUtil = require('../util/user_api_util');


module.exports = {
  fetchUser(id) {
    UserApiUtil.fetchUser(id, this.receiveUser);
  },

  fetchAllUsers() {
    UserApiUtil.fetchAllUsers(this.receiveAllUsers);
  },

  receiveUser(user) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_USER,
      user: user
    })
  },

  receiveAllUsers(users) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_ALL_USERS,
      users: users
    })
  }
}
