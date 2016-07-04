const React = require('react');
const SoundscapeFilterItem = require('./soundscape_filter_item');
const FilterActions = require('../actions/filter_actions');

const SoundscapeFilterIndex = React.createClass({
  getInitialState() {
    return({soundscapesApplied: []})
  },

  _applySoundscape(soundscape_id) {
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

  render() {
    let soundscapes = this.props.allSoundscapes.map((soundscape) => {
      return <SoundscapeFilterItem soundscape={soundscape}
              key={soundscape.id}
              applySoundscape={this._applySoundscape} />
    });
    return(
      <div className="soundscape_filter_index">
        {soundscapes}
      </div>
    )
  }
})

module.exports = SoundscapeFilterIndex;
