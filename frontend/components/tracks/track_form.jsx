const React = require('react');
const SoundscapeStore = require('../../stores/soundscape_store');
const SoundscapeActions = require('../../actions/soundscape_actions');
const TrackActions = require('../../actions/track_actions');
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../../stores/session_store');
const UploadButton = require('../upload_button');

const Modal = require('react-bootstrap').Modal;
const FormControl = require('react-bootstrap').FormControl;
const Checkbox = require('react-bootstrap').Checkbox;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormGroup = require('react-bootstrap').FormGroup;
const TagStore = require('../../stores/tag_store');
const TagActions = require('../../actions/tag_actions');

const TrackForm = React.createClass({
  getInitialState() {
    if (this.props.edit) {
      return({title: this.props.track.title,
              description: this.props.track.description,
              track_url: this.props.track.track_url,
              allTags: [],
              tags: this.props.track.tags.map((tag) => tag.id),
              disabled: false,
              showModal: true})
    } else {
      return({title: "",
              description: "",
              track_url: "sample.mp3",
              allTags: [],
              tags: [],
              disabled: true,
              showModal: true})
    }
  },

  componentDidMount() {
    this.tagListener = TagStore.addListener(this._allTags);
    TagActions.fetchAllTags();
  },

  componentWillUnmount() {
    this.tagListener.remove();
  },

  _allTags() {
    this.setState({allTags: TagStore.all()})
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
    if (this.props.edit) {
      let track = {id: this.props.track.id,
                   title: this.state.title,
                   description: this.state.description,
                   track_url: this.state.track_url,
                   artist_id: this.props.track.artist_id,
                   soundscape_id: this.props.track.soundscape_id,
                   tags_added: this.state.tags}
      TrackActions.editTrack(track);
      this.setState({title: '', description: ''});
    } else {
      let track = {title: this.state.title,
                   description: this.state.description,
                   track_url: this.state.track_url,
                   artist_id: SessionStore.currentUser().id,
                   soundscape_id: this.props.ssID,
                   tags_added: this.state.tags}
      TrackActions.createTrack(track);
      this.setState({title: '', description: ''});
    }
    this.close();
  },

  close() {
    this.setState({showModal: false});
    this.props.toggleButton();
  },

  open() {
    this.setState({showModal: true})
  },

  _handleCheckbox(e) {
    let val = parseInt(e.target.value)
    if (this.state.tags.includes(val)) {
      let idx = this.state.tags.indexOf(val);
      this.state.tags.splice(idx, 1);
    } else {
      this.state.tags.push(val)
    }
  },

  render() {
    let tags = this.state.allTags.map((tag) => {
      let checked = this.state.tags.includes(tag.id)
      return <Checkbox onClick={this._handleCheckbox}
                       key={tag.id}
                       defaultChecked={checked}
                       value={tag.id}>{tag.name}</Checkbox>
    })
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
             <FormGroup>
             {tags}
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
