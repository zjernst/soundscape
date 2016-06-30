const React = require('react');
const SoundscapeStore = require('../../stores/soundscape_store');
const SoundscapeActions = require('../../actions/soundscape_actions');
const TrackActions = require('../../actions/track_actions');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../stores/session_store');
const UploadButton = require('../upload_button');

const TrackForm = React.createClass({
  getInitialState() {
    return({title: "", description: "", track_url: "sample.mp3", disabled: true})
  },

  _update(property) {
    return (e) => this.setState({[property]: e.target.value})
  },

  _uploadTrack(track) {
    this.setState({track_url: track.url});
    this.setState({disabled: false})
  },

  _handleSubmit(e) {
    e.preventDefault();
    if (SessionStore.isUserLoggedIn()) {
      let track = {title: this.state.title, description: this.state.description,
                   track_url: this.state.track_url, artist_id: SessionStore.currentUser().id,
                   soundscape_id: this.props.ssID}
      TrackActions.createTrack(track);
      this.setState({title: '', description: ''});
    } else {
      hashHistory.push('/login');
    }
  },

  render() {
    return(
      <div className="track_form_container">
        <form onSubmit={this._handleSubmit}>
          <label className="track_title_label">Title</label>
          <input type="text"
                 value={this.state.title}
                 onChange={this._update('title')}
                 className="track_field" />
          <label className="track_description_label">Description</label>
          <textarea
                 value={this.state.description}
                 onChange={this._update('description')}
                 className="track_field" />
          <input type="submit" disabled={this.state.disabled} />
        </form>
        <UploadButton uploadTrack={this._uploadTrack}/>
      </div>
    )
  }
});

module.exports = TrackForm;