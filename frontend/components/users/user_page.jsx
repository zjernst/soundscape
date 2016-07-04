const React = require('react');
const UserActions = require('../../actions/user_actions');
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const FilterActions = require('../../actions/filter_actions');
const TrackIndex = require('../tracks/track_index');
const UserStore = require('../../stores/user_store');
const hashHistory = require('react-router').hashHistory;

const UserPage = React.createClass({
  getInitialState() {
    return({user: UserStore.find(this.props.params.userId)})
  },

  componentDidMount() {
    this.userListener = UserStore.addListener(this._onChange);
    UserActions.fetchAllUsers();
  },

  componentWillUnmount() {
    this.userListener.remove();
  },

  _onChange() {
    this.setState({user: UserStore.find(this.props.params.userId)})
  },

  componentWillReceiveProps(newProps) {
    this.setState({user: UserStore.find(newProps.params.userId)})
  },

  render() {
    return(
      <div className="user_page">
        <h3 className="username">{this.state.user.username}</h3>
        <div className="users_uploaded_tracks">
          <h4>Tracks Uploaded</h4>
          <TrackIndex tracks={this.state.user.tracks} parent="user"/>
        </div>
      </div>
    )
  }

});

module.exports = UserPage;
