const React = require('react');
const TrackActions = require('../../actions/track_actions');
const Glyphicon = require('react-bootstrap').Glyphicon;
const TrackEditForm = require('./track_form');

const TrackDetailItem = React.createClass({
  getInitialState() {
    return({editForm: false})
  },

  _addTrack() {
    TrackActions.getTrack(this.props.track.id)
  },

  render() {
    return(
      <div className="track_detail_item">
        <div className="track_description">
          {this.props.track.description}
        </div>
        <div className="track_audio_item">
          <audio controls="controls" src={this.props.track.track_url} />
        </div>
        <Glyphicon glyph="plus" onClick={this._addTrack} />
        <Glyphicon glyph="edit" />
        <Glyphicon glyph="collapse-up" className="track_collapse" onClick={this.props.hideDetails} />
      </div>
    )
  }
});

module.exports = TrackDetailItem;
