const React = require('react');
const TrackIndexItem = require('./track_index_item');
const SoundscapeStore = require('../../stores/soundscape_store');
const SoundscapeActions = require('../../actions/soundscape_actions');
const hashHistory = require('react-router').hashHistory;

const TrackIndex = React.createClass({
  getInitialState() {
    return({ssID: this.props.ssID, tracks: []})
  },

  _onChange() {
    let ss = SoundscapeStore.find(this.state.ssID);
    if (ss) {
      this.setState({tracks: ss.tracks});
    }
  },

  componentDidMount() {
    this.ssListener = SoundscapeStore.addListener(this._onChange);
    SoundscapeActions.getSoundscape(this.props.ssID);
  },

  componentWillUnmount() {
    this.ssListener.remove();
  },

  componentWillReceiveProps(newProps) {
    if (newProps.ssID !== this.state.ssID) {
      this.setState({ssID: newProps.ssID})
      SoundscapeActions.getSoundscape(newProps.ssID)
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
