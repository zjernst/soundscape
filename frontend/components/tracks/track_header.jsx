const React = require('react');

const TrackHeader = React.createClass({
  render() {
    let header = "track_header"
    if (this.props.parent === "user") {
      header = header + " user"
    }
    return(
      <div className={header}>
        <span className="play_button_header"></span>
        <span className="track_title_header">Track</span>
        <span className="track_artist_header">{this.props.parent === "user" ? "Downloads" : "Artist"}</span>
        <div className="collapse_header" />
      </div>
    )
  }
});

module.exports = TrackHeader;
