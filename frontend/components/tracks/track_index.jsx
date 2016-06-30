const React = require('react');
const TrackIndexItem = require('./track_index_item');
const SoundscapeStore = require('../../stores/soundscape_store');
const SoundscapeActions = require('../../actions/soundscape_actions');

const TrackIndex = React.createClass({
  getInitialState() {
    return({tracks: []})
  },

  _onChange() {
    let tracks = SoundscapeStore.find(this.props.ssID).tracks;
    if (tracks) {
      this.setState({tracks: tracks});
    }
  },

  componentDidMount() {
    this.ssListener = SoundscapeStore.addListener(this._onChange);
    SoundscapeActions.getSoundscape(this.props.ssID);
  },

  componentWillUnmount() {
    this.ssListener.remove();
  },

  componentWillReceiveProps() {
    let tracks = SoundscapeStore.find(this.props.ssID).tracks;
    if (tracks) {
      this.setState({tracks: tracks})
    }
  },

  render() {
    let tracks = "missing"
    if (this.state.tracks.length > 0) {
      tracks = this.state.tracks.map((track) => {
        return <TrackIndexItem key={track.id} track={track} />
      })
    }
    return(
      <div>
        {tracks}
      </div>
    )
  }
})

module.exports = TrackIndex;
