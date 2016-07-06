const classNames = require('classnames');
const React = require('react');
const SoundscapeStore = require('../../stores/soundscape_store');
const SoundscapeActions = require('../../actions/soundscape_actions');
const SoundscapeDetail = require('./ss_detail');
const hashHistory = require('react-router').hashHistory;

const SoundscapeIndexItem = React.createClass({
  getInitialState() {
    return({details: false})
  },

  _displayDetails() {
    this.setState({details: !this.state.details})
    let id = this.props.soundscape.id;
    hashHistory.push(`/soundscape/${id}`)
  },

  render() {
    let itemClass = classNames("soundscape_index_item", this.props.soundscape.title)
    let itemContainer = classNames(this.props.soundscape.title, "ss_item_container")
    return(
      <div className={itemContainer}>
        <div className="ss_screen">
          <div className={itemClass} onClick={this._displayDetails}>
            {this.state.details ? <SoundscapeDetail soundscape={this.props.soundscape} /> : ""}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SoundscapeIndexItem;
