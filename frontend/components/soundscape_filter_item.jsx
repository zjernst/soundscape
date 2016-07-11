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

  componentWillReceiveProps(newProps) {
    if (newProps.all) {
      this.setState({selected: false})
    }
  },

  render() {
    let soundscapeClass
    if (this.state.selected) {
      soundscapeClass = classNames("soundscape_label", "selected")
    } else {
      soundscapeClass = "soundscape_label"
    }
    name = this.props.soundscape.title
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return(
      <div className="soundscape_filter_item" onClick={this._soundscapeFilter}>
        <h4 className="soundscape_item_text"><Label className={soundscapeClass}>{name}</Label></h4>
      </div>
    )
  }
})

module.exports = SoundscapeFilterItem;
