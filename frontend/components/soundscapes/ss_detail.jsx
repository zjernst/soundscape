const React = require('react');
const SoundscapeStore = require('../../stores/soundscape_store');
const SoundscapeActions = require('../../actions/soundscape_actions');
const TrackIndex = require('../tracks/track_index');
const SoundscapeDetailsIndex = require('./soundscape_details_index');
const TrackForm = require('../tracks/track_form');

const SoundscapeDetail = React.createClass({
  getInitialState() {
    return({soundscape: SoundscapeStore.find(this.props.params.ss_id)})
  },

  componentDidMount() {
    this.ssListener = SoundscapeStore.addListener(this._onChange);
    SoundscapeActions.fetchAllSoundscapes();
    SoundscapeActions.getSoundscape(this.props.params.ss_id);
  },

  componentWillUnmount() {
    this.ssListener.remove();
  },

  componentWillReceiveProps(newProps) {
    this.setState({soundscape: SoundscapeStore.find(newProps.params.ss_id)})
  },

  _onChange() {
    this.setState({soundscape: SoundscapeStore.find(this.props.params.ss_id)})
  },

  render() {
    let trackIndex
    let ssIndex
    let title
    let trackForm
    if (this.state.soundscape) {
      let tracks = this.state.soundscape.tracks
      ssIndex = <SoundscapeDetailsIndex ssID={this.props.params.ss_id}/>
      title = <div className="soundscape_detail_title">{this.state.soundscape.title}</div>
      trackIndex = <TrackIndex tracks={tracks} />
      trackForm = <TrackForm ssID={this.props.params.ss_id}/>
    } else {
      ssIndex = "Loading..."
      trackIndex = "Loading..."
      title = "Loading..."
      trackForm = "Loading..."
    }

    return(
      <div className="soundscape_detail">
        {ssIndex}
        {title}
        {trackIndex}
        {trackForm}
      </div>
    )
  }
});

module.exports = SoundscapeDetail;
