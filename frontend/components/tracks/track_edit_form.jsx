const React = require('react');
const SoundscapeStore = require('../../stores/soundscape_store');
const SoundscapeActions = require('../../actions/soundscape_actions');
const TrackActions = require('../../actions/track_actions');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../stores/session_store');
const UploadButton = require('../upload_button');

const Modal = require('react-bootstrap').Modal;
const FormControl = require('react-bootstrap').FormControl;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormGroup = require('react-bootstrap').FormGroup;

const TrackForm = React.createClass({
  getInitialState() {
    return({title: this.props.track.title, description: this.props.track.description,
      track_url: this.props.track.track_url, showModal: true})
  },

  _update(property) {
    return (e) => this.setState({[property]: e.target.value})
  },

  _uploadTrack(track) {
    this.setState({track_url: track.url});
    this.setState({disabled: false})
  },

  _handleSubmit(e) {
    e.preventDefault();
    if (SessionStore.isUserLoggedIn()) {
      let track = {title: this.state.title, description: this.state.description,
                   track_url: this.state.track_url, artist_id: SessionStore.currentUser().id,
                   soundscape_id: this.props.ssID}
      TrackActions.createTrack(track);
      this.setState({title: '', description: ''});
    } else {
      hashHistory.push('/login');
    }
  },

  close() {
    this.setState({showModal: false});
    this.props.toggleButton();
  },

  open() {
    this.setState({showModal: true})
  },

  render() {
    return(
      <Modal show={this.state.showModal} onHide={this.close}>
      <Modal.Header>Enter Track Information</Modal.Header>
        <div className="track_form_container">
          <form className="track_form" onSubmit={this._handleSubmit}>
            <FormGroup>
              <ControlLabel className="track_title_label">Title</ControlLabel>
              <FormControl type="text"
                     value={this.state.title}
                     onChange={this._update('title')}
                     className="track_field" />
             </FormGroup>
             <FormGroup>
              <ControlLabel className="track_description_label">Description</ControlLabel>
              <FormControl
                     componentClass="textarea"
                     value={this.state.description}
                     onChange={this._update('description')}
                     className="track_field" />
             </FormGroup>
            <UploadButton uploadTrack={this._uploadTrack}/>
            <input type="submit" className="button" disabled={this.state.disabled} />
          </form>
        </div>
      </Modal>
    )
  }
});

module.exports = TrackForm;
