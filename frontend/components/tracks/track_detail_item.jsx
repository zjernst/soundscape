const React = require('react');

const TrackDetailItem = React.createClass({
  render() {
    return(
      <div className="track_detail_item">
        <div className="track_description">
          {this.props.track.description}
        </div>
        <div className="track_audio_item">
          <audio controls="controls" src={this.props.track.track_url} />
        </div>
      </div>
    )
  }
});

module.exports = TrackDetailItem;
