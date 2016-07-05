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

  render() {
    return(
      <div className="playlist_item_detail">
        <div className="playlist_item_title_container">
          {this.props.track.title}
        </div>
        <div className="playlist_item_trash_container" onClick={this._trash}>
          <Glyphicon glyph="trash" />
        </div>
      </div>
    )
  }
});

module.exports = PlaylistItemDetail;
