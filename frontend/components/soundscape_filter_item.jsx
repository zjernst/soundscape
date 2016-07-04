const React = require('react');
const Label = require('react-bootstrap').Label;
const FilterActions = require('../actions/filter_actions');
const classNames = require('classnames');

const SoundscapeFilterItem = React.createClass({
  getInitialState() {
    return({seleted: false})
  },

  _soundscapeFilter() {
    this.props.applySoundscape(this.props.soundscape.id)
    this.setState({selected: !this.state.selected})
  },

  render() {
    let soundscapeClass
    if (this.state.selected) {
      soundscapeClass = classNames("soundscape_filter_item", "selected")
    } else {
      soundscapeClass = "soundscape_filter_item"
    }
    return(
      <div className={soundscapeClass} onClick={this._soundscapeFilter}>
        <h4 className="soundscape_item_text"><Label className="soundscape_label">{this.props.soundscape.title}</Label></h4>
      </div>
    )
  }
})

module.exports = SoundscapeFilterItem;
