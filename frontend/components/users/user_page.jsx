const React = require('react');
const UserActions = require('../../actions/user_actions');
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const UserStore = require('../../stores/user_store');
const hashHistory = require('react-router').hashHistory;

const UserPage = React.createClass({
  getInitialState() {
    return({user: SessionStore.currentUser()})
  },

  _logout() {
    SessionActions.logout();
    hashHistory.push('/login');
  },

  render() {
    return(
      <div>
        <h3>Welcome to your page, {this.state.user.username}!</h3>
        <button onClick={this._logout}>Logout</button>
      </div>
    )
  }

});

module.exports = UserPage;
