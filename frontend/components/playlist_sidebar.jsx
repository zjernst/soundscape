const React = require('react');
const TrackStore = require('../stores/track_store');
const TrackActions = require('../actions/track_actions');
const PlaylistItem = require('./playlist_item');

const PlaylistSidebar = React.createClass({
  getInitialState() {
    return({tracks: TrackStore.all(), details: false})
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

  _mouseEnter() {
    this.setState({details: true})
  },

  _mouseLeave() {
    this.setState({details: false})
  },

  render() {
    let tracks = this.state.tracks.map((track) => {
      return <PlaylistItem key={track.id}
                           track={track}
                           details={this.state.details}
                           playing={track === this.state.tracks[0]}/>
    })

    return(
      <div className="playlist_sidebar"
           onMouseEnter={this._mouseEnter}
           onMouseLeave={this._mouseLeave}
           >
        {tracks}
      </div>
    )
  }
});

module.exports = PlaylistSidebar;
