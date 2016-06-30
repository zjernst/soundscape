const React = require('react');
const SoundscapeStore = require('../../stores/soundscape_store');
const SoundscapeActions = require('../../actions/soundscape_actions');
const SoundscapeIcon = require('./soundscape_icon');

const SoundscapeDetailsIndex = React.createClass({
  getInitialState() {
    return({index: SoundscapeStore.all()})
  },

  render() {
    let ssID = this.props.ssID
    let indexIcons = this.state.index.map((ss) => {
      return <SoundscapeIcon key={ss.id} selected={ssID} soundscape={ss} />
    })
    return(
      <div className="soundscape_details_index">
        {indexIcons}
      </div>
    )
  }
})

module.exports = SoundscapeDetailsIndex;
