const React = require('react');
const TrackStore = require('../stores/track_store');
const TrackActions = require('../actions/track_actions');
const PlaylistItem = require('./playlist_item');

const PlaylistSidebar = React.createClass({
  getInitialState() {
    return({tracks: TrackStore.all()})
  },

  componentDidMount() {
    this.trackListener = TrackStore.addListener(this._onChange)
  },

  componentWillUnmount() {
    this.trackListener.remove();
  },

  _onChange() {
    this.setState({tracks: TrackStore.all()})
  },

  render() {
    let tracks = this.state.tracks.map((track) => {
      return <li className="playlist_track" key={track.id}>&#9824; {track.title}</li>
    })
    return(
      <div className="playlist_sidebar">
        {tracks}
      </div>
    )
  }
});

module.exports = PlaylistSidebar;
