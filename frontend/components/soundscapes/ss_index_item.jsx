const classNames = require('classnames');
const React = require('react');
const SoundscapeStore = require('../../stores/soundscape_store');
const SoundscapeActions = require('../../actions/soundscape_actions');
const SoundscapeDetail = require('./ss_detail');

const SoundscapeIndexItem = React.createClass({
  getInitialState() {
    return({details: false})
  },

  _displayDetails() {
    this.setState({details: !this.state.details})
  },

  render() {
    let itemClass = classNames("soundscape_index_item", this.props.soundscape.title)
    return(
      <div className={itemClass} onClick={this._displayDetails}>
        {this.props.soundscape.title}
        {this.state.details ? <SoundscapeDetail soundscape={this.props.soundscape} /> : ""}
      </div>
    )
  }
});

module.exports = SoundscapeIndexItem;
