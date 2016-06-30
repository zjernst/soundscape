const React = require('react');
const SoundscapeStore = require('../../stores/soundscape_store');
const SoundscapeActions = require('../../actions/soundscape_actions');
const SoundscapeIndexItem = require('./ss_index_item');
const hashHistory = require('react-router').hashHistory;

const SoundscapeIcon = React.createClass({
  _redirect() {
    let id = this.props.soundscape.id
    hashHistory.push(`/soundscape/${id}`)
  },

  render() {
    return(
      <div className="soundscape_icon" onClick={this._redirect}>
        <img src={this.props.soundscape.image_url} height="100" width="100" />
      </div>
    )
  }
});

module.exports = SoundscapeIcon;
