const React = require('react');
const SoundscapeStore = require('../../stores/soundscape_store');
const SoundscapeActions = require('../../actions/soundscape_actions');

const SoundscapeIndexItem = React.createClass({
  getInitialState() {
    return({details: false})
  },

  _displayDetails() {
    this.setState({details: true})
    SoundscapeActions.getSoundscape(this.props.soundscape.id)
  },

  render() {
    return(
      <div className="soundscape_index_item" onClick={this._displayDetails}>
        {this.props.soundscape.title}
        {this.state.details ? this.props.soundscape.tracks.toString() : ""}
      </div>
    )
  }
});

module.exports = SoundscapeIndexItem;
