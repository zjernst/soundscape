const React = require('react');

const TrackHeader = React.createClass({
  render() {
    return(
      <div className="track_header">
        <span className="play_button_header"></span>
        <span className="track_title_header">Track</span>
        <span className="track_artist_header">Artist</span>
      </div>
    )
  }
});

module.exports = TrackHeader;
