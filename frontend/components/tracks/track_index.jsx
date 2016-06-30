const React = require('react');
const TrackIndexItem = require('./track_index_item');
const SoundscapeStore = require('../../stores/soundscape_store');
const SoundscapeActions = require('../../actions/soundscape_actions');
const hashHistory = require('react-router').hashHistory;

const TrackIndex = React.createClass({
  getInitialState() {
    return({tracks: this.props.tracks})
  },

  componentWillReceiveProps(newProps) {
    if (newProps.tracks !== this.state.tracks) {
      this.setState({tracks: newProps.tracks})
    }
  },

  render() {
    let tracks = "missing"
    if (this.state.tracks && this.state.tracks.length > 0) {
      tracks = this.state.tracks.map((track) => {
        return <TrackIndexItem key={track.id} track={track} />
      })
    }
    return(
      <div className="track_index">
        {tracks}
      </div>
    )
  }
})

module.exports = TrackIndex;
