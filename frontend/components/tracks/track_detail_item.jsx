const React = require('react');
const TrackActions = require('../../actions/track_actions');
const Glyphicon = require('react-bootstrap').Glyphicon;
const TrackEditForm = require('./track_form');
const Button = require('react-bootstrap').Button;
const Nav = require('react-bootstrap').Nav
const NavItem = require('react-bootstrap').NavItem

const TrackDetailItem = React.createClass({
  getInitialState() {
    return({editForm: false})
  },

  _addTrack() {
    TrackActions.getTrack(this.props.track.id)
  },

  render() {
    let tags = this.props.track.tags.map( (tag) => {
      return tag.name
    })

    return(
      <div className="track_detail_item">
        <div className="track_description">
          {this.props.track.description}
        </div>
        <div className="track_audio_item">
          <audio controls="controls" src={this.props.track.track_url} />
        </div>
        <Nav className="track_detail_options">
          <NavItem className="track_detail_option_item">
            <Glyphicon glyph="plus" onClick={this._addTrack} />
          </NavItem>
          <NavItem className="track_detail_option_item">
            <Glyphicon glyph="edit" />
          </NavItem>
          <NavItem className="track_detail_option_item">
            <Glyphicon glyph="collapse-up" className="track_collapse" onClick={this.props.hideDetails} />
          </NavItem>
          {tags}
          <Button bsStyle="default" href={this.props.track.track_url} download={this.props.track.title}>Download</Button>
        </Nav>
      </div>
    )
  }
});
// <NavItem className="track_detail_option_item">
// </NavItem>

module.exports = TrackDetailItem;
