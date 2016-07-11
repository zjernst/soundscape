const React = require('react');
const UserActions = require('../../actions/user_actions');
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const FilterStore = require('../../stores/filter_store');
const FilterActions = require('../../actions/filter_actions');
const TrackIndex = require('../tracks/track_index');
const UserStore = require('../../stores/user_store');
const hashHistory = require('react-router').hashHistory;
const AddTrack = require('../tracks/add_track');

const UserPage = React.createClass({
  getInitialState() {
    return({user: "", tracks: FilterStore.all()})
  },

  componentDidMount() {
    this.userListener = UserStore.addListener(this._onChange);
    this.filterListener = FilterStore.addListener(this._filterChange);
    UserActions.fetchAllUsers();
    FilterActions.fetchAllTracks({filters: {artists: [this.props.params.userId]}});
  },

  componentWillUnmount() {
    this.userListener.remove();
    this.filterListener.remove();
  },

  _onChange() {
    this.setState({user: UserStore.find(this.props.params.userId)})
  },

  _filterChange() {
    this.setState({tracks: FilterStore.all()})
  },

  componentWillReceiveProps(newProps) {
    this.setState({user: UserStore.find(newProps.params.userId)})
    FilterActions.fetchAllTracks({filters: {artists: [newProps.params.userId]}})
  },

  downloads() {
    let count = 0;
    this.state.tracks.forEach((track) => {
      count = count + track.downloads
    })
    return count
  },

  render() {
    let num_tracks
    if (this.state.tracks) {
      num_tracks = this.state.tracks.length
    }

    return(
      <div className="user_page">
        <div className="profile">
          <div className="cover_photo_container">
            <div className="centerer">
              <img className="cover_photo" src={this.state.user.cover_photo}/>
            </div>
          </div>

          <div className="content_bottom">
            <div className="profile_inner">
              <div className="username_and_avatar">
                <div className="avatar">
                  <img className="profile_pic" src={this.state.user.profile_pic} />
                </div>
                <div className="username">{this.state.user.username}</div>
              </div>
              <div className="user_stats">
                <div className="stat">
                  <div className="value">{this.downloads()}</div>
                  <div className="stat_text">Downloads</div>
                </div>
                <div className="stat">
                  <div className="value">{this.state.tracks.length}</div>
                  <div className="stat_text">Uploads</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="userpage_content_container">
          <div className="bio_container">
            <h2>Bio</h2>
            <div className="bio">
              <p className="bio_text">{this.state.user.bio}</p>
            </div>
          </div>
          <div className="users_uploaded_tracks">
            <h2>Tracks Uploaded</h2>
            <TrackIndex tracks={this.state.tracks} parent="user"/>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = UserPage;
