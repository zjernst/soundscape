const React = require('react');
const TrackStore = require('../stores/track_store');
const TrackActions = require('../actions/track_actions');
const PlaylistItem = require('./playlist_item');

const PlaylistSidebar = React.createClass({
  getInitialState() {
    return({tracks: TrackStore.all(), playing: TrackStore.playing(), details: false})
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
    let tracks = this.state.tracks.map((track, idx) => {
      return <PlaylistItem key={track.id}
                           track={track}
                           details={this.state.details}
                           playing={idx === this.state.playing}/>
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
