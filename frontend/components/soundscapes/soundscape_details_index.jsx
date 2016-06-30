const React = require('react');
const SoundscapeStore = require('../../stores/soundscape_store');
const SoundscapeActions = require('../../actions/soundscape_actions');
const SoundscapeIcon = require('./soundscape_icon');

const SoundscapeDetailsIndex = React.createClass({

  render() {
    let indexIcons = this.props.index.map((ss) => {
      return <SoundscapeIcon key={ss.id} soundscape={ss} />
    })
    return(
      <div className="soundscape_details_index">
        {indexIcons}
      </div>
    )
  }
})

module.exports = SoundscapeDetailsIndex;
