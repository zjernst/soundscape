const React = require('react');
const TrackActions = require('../../actions/track_actions');
const Glyphicon = require('react-bootstrap').Glyphicon;
const TrackForm = require('./track_form');
const Button = require('react-bootstrap').Button;
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
      <div className="track_detail_item">
        <div className="track_description">
          {this.props.track.description}
        </div>
        <div className="track_audio_item">
          <audio controls="controls" src={this.props.track.track_url} />
        </div>
        <Nav className="track_detail_options">
          <NavItem className="track_detail_option_item" onClick={this._addTrack}>
            <Glyphicon glyph="plus" /> Add to Playlist
          </NavItem>
          <NavItem className="track_detail_option_item" onClick={this._toggleForm}>
            <Glyphicon glyph="edit" />
            {editForm}
          </NavItem>
            {this.props.track.artist_id === SessionStore.currentUser().id ?
              <NavItem className="track_detail_option_item">
              <Glyphicon glyph="trash" onClick={this._delete}/>
              </NavItem> : ""}
          <NavItem>{tags}</NavItem>
          <Button bsStyle="default" href={this.props.track.track_url} download={this.props.track.title}>Download</Button>
          <NavItem className="track_detail_option_item" onClick={this.props.hideDetails}>
          <Glyphicon glyph="collapse-up" className="track_collapse"/>
          </NavItem>
        </Nav>
      </div>
    )
  }
});
// <NavItem className="track_detail_option_item">
// </NavItem>

module.exports = TrackDetailItem;
