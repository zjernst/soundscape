const React = require('react');
const SoundscapeStore = require('../../stores/soundscape_store');
const SoundscapeActions = require('../../actions/soundscape_actions');
const SoundscapeIndexItem = require('./ss_index_item');
const hashHistory = require('react-router').hashHistory;
const classNames = require('classnames');
const Image = require('react-bootstrap').Image;

const SoundscapeIcon = React.createClass({
  _redirect() {
    let id = this.props.soundscape.id
    hashHistory.push(`/soundscape/${id}`)
  },

  render() {
    let selected = ""
    if (this.props.selected == this.props.soundscape.id) {
      selected = "selected"
    }
    let iconClass = classNames('soundscape_icon', selected);
    return(
      <div className={iconClass} onClick={this._redirect}>
        <img src={this.props.soundscape.image_url} height="80" width="80"/>
      </div>
    )
  }
});

module.exports = SoundscapeIcon;
