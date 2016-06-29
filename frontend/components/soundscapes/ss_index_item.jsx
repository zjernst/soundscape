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
    return(
      <div className="soundscape_index_item" onClick={this._displayDetails}>
        {this.props.soundscape.title}
        {this.state.details ? <SoundscapeDetail soundscape={this.props.soundscape} /> : ""}
      </div>
    )
  }
});

module.exports = SoundscapeIndexItem;
