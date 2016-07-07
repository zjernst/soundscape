const classNames = require('classnames');
const React = require('react');
const SoundscapeStore = require('../../stores/soundscape_store');
const SoundscapeActions = require('../../actions/soundscape_actions');
const SoundscapeDetail = require('./ss_detail');
const hashHistory = require('react-router').hashHistory;
const TrackActions = require('../../actions/track_actions');

const SoundscapeIndexItem = React.createClass({
  getInitialState() {
    return({details: false})
  },

  _addToPlayer() {
    TrackActions.updateTracks(this.props.soundscape.tracks)
  },

  render() {
    let itemClass = classNames("soundscape_index_item", this.props.soundscape.title)
    let itemContainer = classNames(this.props.soundscape.title, "ss_item_container")
    return(
      <div className={itemContainer}>
        <div className="ss_screen">
          <div className={itemClass} onClick={this._addToPlayer}>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SoundscapeIndexItem;
