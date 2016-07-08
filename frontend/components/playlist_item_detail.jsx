const React = require('react');
const Glyphicon = require('react-bootstrap').Glyphicon;
const TrackStore = require('../stores/track_store');

const PlaylistItemDetail = React.createClass({
  getInitialState() {
    return({track: this.props.track})
  },

  _trash() {
    TrackActions.removeTrack(this.props.track)
  },

  _setPlaying() {
    TrackActions.setPlaying(this.props.track);
  },

  render() {
    return(
      <div className="playlist_item_detail">
        <div className="playlist_item_title_container" onClick={this._setPlaying}>
          {this.props.track.title}
        </div>
        <div className="playlist_item_trash_container" onClick={this._trash}>
          <Glyphicon glyph="trash" />
        </div>
        <div className="playlist_item_download_container">
          <a className="playlist_download_link"
             href={this.props.track.track_url}
             download={this.props.track.title}>
          <i className="fa fa-cloud-download playlist_icon" aria-hidden="true"></i></a>
        </div>
      </div>
    )
  }
});

module.exports = PlaylistItemDetail;
