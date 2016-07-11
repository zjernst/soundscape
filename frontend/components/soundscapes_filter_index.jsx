const React = require('react');
const SoundscapeFilterItem = require('./soundscape_filter_item');
const FilterActions = require('../actions/filter_actions');
const Label = require('react-bootstrap').Label;

const SoundscapeFilterIndex = React.createClass({
  getInitialState() {
    return({soundscapesApplied: [], all: true})
  },

  _applySoundscape(soundscape_id) {
    this.setState({all: false});
    if (this.state.soundscapesApplied.includes(soundscape_id)) {
      let idx = this.state.soundscapesApplied.indexOf(soundscape_id)
      this.state.soundscapesApplied.splice(idx, 1);
    } else {
      let soundscapes = this.state.soundscapesApplied
      soundscapes.push(soundscape_id)
      this.setState({soundscapesApplied: soundscapes})
    }
    this.props.updateFilters("soundscapes", this.state.soundscapesApplied);
  },

  _all() {
    this.setState({soundscapesApplied: [], all: true});
    this.props.updateFilters("soundscapes", []);
  },

  render() {
    let soundscapes = this.props.allSoundscapes.map((soundscape) => {
      return <SoundscapeFilterItem soundscape={soundscape}
              key={soundscape.id}
              applySoundscape={this._applySoundscape}
              all={this.state.all} />
    });
    let allClass = "soundscape_label"
    if (this.state.all) {
      allClass = allClass + " selected"
    }
    return(
      <div className="soundscape filter_container">
      <div className="soundscape filter_title">
        <span className="soundscape filter_text">Soundscapes</span>
      </div>
      <div className="soundscape_filter_index">

        <div className="soundscape_filter_item"
             onClick={this._all}>
             <h4 className="soundscape_item_text">
             <Label className={allClass}>
             All Soundscapes
             </Label>
             </h4>
        </div>
        {soundscapes}
        </div>
      </div>
    )
  }
})

module.exports = SoundscapeFilterIndex;
