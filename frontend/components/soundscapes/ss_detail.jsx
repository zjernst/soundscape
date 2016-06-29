const React = require('react');
const SoundscapeStore = require('../../stores/soundscape_store');
const SoundscapeActions = require('../../actions/soundscape_actions');

const SoundscapeDetail = React.createClass({
  getInitialState() {
    return({tracks: SoundscapeStore.find(this.props.soundscape.id).tracks})
  },

  componentDidMount() {
    this.ssListener = SoundscapeStore.addListener(this._onChange);
    SoundscapeActions.getSoundscape(this.props.soundscape.id);
  },

  componentWillUnmount() {
    this.ssListener.remove();
  },

  _onChange() {
    this.setState({tracks: SoundscapeStore.find(this.props.soundscape.id).tracks})
  },

  render() {
    return(
      <div className="soundscape_detail">
        {this.props.soundscape.id}
      </div>
    )
  }
});

module.exports = SoundscapeDetail;
