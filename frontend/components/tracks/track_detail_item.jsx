const React = require('react');
const TrackActions = require('../../actions/track_actions');
const Glyphicon = require('react-bootstrap').Glyphicon;
const TrackForm = require('./track_form');
// const Button = require('react-bootstrap').Button;
const Nav = require('react-bootstrap').Nav;
const NavItem = require('react-bootstrap').NavItem;
const Label = require('react-bootstrap').Label;

const TrackDetailItem = React.createClass({
  getInitialState() {
    return({editForm: false})
  },

  _addTrack() {
    TrackActions.getTrack(this.props.track.id)
  },

  _delete(e) {
    e.preventDefault();
    TrackActions.deleteTrack(this.props.track.id);
  },

  _toggleForm() {
    this.setState({editForm: !this.state.editForm})
  },

  _addToPlayer() {
    TrackActions.addTrack(this.props.track)
  },

  _updateDownload() {
    let track = this.props.track;
    track.downloads += 1;
    TrackActions.editTrack(track)
  },

  render() {
    let tags = this.props.track.tags.map( (tag) => {
      return <Label className="tag" key={tag.id}>{tag.name}</Label>
    })

    let editForm
    if (this.state.editForm) {

      editForm = <TrackForm toggleButton={this._toggleForm}
                            track={this.props.track}
                            edit="true" />
    }

    return(
      <div className="track_drop_down">
      <div className="track_detail_item">
        <div className="track_tags">{tags}</div>
        <div className="track_description_container">
          <div className="description_label">Description:</div>
          <div className="track_description">{this.props.track.description}</div>
        </div>
        <div className="track_audio_item">
          <audio src={this.props.track.track_url} />
        </div>
        <div className="track_detail_options">
        <button className="download_button"
         onClick={this._updateDownload}>
         <a href={this.props.track.track_url}
          download={this.props.track.title}>Download</a></button>
        <div className="add_to_playlist" onClick={this._addToPlayer}>
          <i className="fa fa-plus-circle" aria-hidden="true"></i>
          <span className="add_to_playlist_text">Add to playlist</span>
        </div>
          {this.props.track.artist_id === SessionStore.currentUser().id?
            <div className="edit_track" onClick={this._toggleForm}><Glyphicon glyph="edit" />
              {editForm}
          </div> : ""}
            {this.props.track.artist_id === SessionStore.currentUser().id ?
              <div className="trash_track">
              <Glyphicon glyph="trash" onClick={this._delete}/>
              </div> : ""}
        </div>
      </div>
      <div className="collapse_track" onClick={this.props.hideDetails}>
        <Glyphicon className="collapse_glyph" glyph="collapse-up"/>
      </div>
      </div>
    )
  }
});
// <NavItem className="track_detail_option_item">
// </NavItem>
// <NavItem className="track_detail_option_item" onClick={this._addTrack}>
// </NavItem>
// <div className="add_to_playlist" onClick={this._addTrack}><Glyphicon glyph="plus" /> Add to Playlist</div>

module.exports = TrackDetailItem;
