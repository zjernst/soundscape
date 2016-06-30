const React = require('react');
const SoundscapeStore = require('../../stores/soundscape_store');
const SoundscapeActions = require('../../actions/soundscape_actions');
const TrackIndex = require('../tracks/track_index');
const SoundscapeDetailsIndex = require('./soundscape_details_index');

const SoundscapeDetail = React.createClass({
  getInitialState() {
    return({soundscape: SoundscapeStore.find(this.props.params.ss_id),
            others: SoundscapeStore.allExcept(this.props.params.ss_id)})
  },

  componentDidMount() {
    this.ssListener = SoundscapeStore.addListener(this._onChange);
    SoundscapeActions.fetchAllSoundscapes();
    SoundscapeActions.getSoundscape(this.props.params.ss_id);
  },

  componentWillUnmount() {
    this.ssListener.remove();
  },

  componentWillReceiveProps() {
    this.setState({soundscape: SoundscapeStore.find(this.props.params.ss_id),
            others: SoundscapeStore.allExcept(this.props.params.ss_id)})
  },

  _onChange() {
    this.setState({soundscape: SoundscapeStore.find(this.props.params.ss_id),
                   others: SoundscapeStore.allExcept(this.props.params.ss_id)})
  },

  render() {
    let trackIndex
    let ssIndex
    if (this.state.soundscape) {
      ssIndex = <SoundscapeDetailsIndex index={this.state.others} />
      trackIndex = <TrackIndex ssID={this.state.soundscape.id} />
    } else {
      ssIndex = "Loading..."
      trackIndex = "Loading..."
    }

    return(
      <div className="soundscape_detail">
        {ssIndex}
        {trackIndex}
      </div>
    )
  }
});

module.exports = SoundscapeDetail;
