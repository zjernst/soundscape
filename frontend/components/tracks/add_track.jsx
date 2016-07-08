const React = require('react');
const TrackForm = require('./track_form');

const AddTrack = React.createClass({
  getInitialState() {
    return({show: false})
  },

  _addForm() {
    this.setState({show: true})
  },

  _closeForm() {
    this.setState({show: false})
  },

  render() {
    let form
    if (this.state.show) {
      form = <TrackForm toggleButton={this._closeForm} />
    }

    return(
      <div className="add_track_container">
        {form}
        <div className="add_track_inner">
        </div>
        <div className="add_track_text">
          <h4 className="add_track_title">Share your sounds!</h4>
          <p className="add_track_p">Upload your own tracks. Make the world a more audible place for all.</p>
          <div className="add_track_button_container">
            <button className="add_track_button" onClick={this._addForm}>Add Track</button>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = AddTrack;
