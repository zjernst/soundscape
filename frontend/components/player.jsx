const React = require('react');
const TrackStore = require('../stores/track_store');
const TrackActions = require('../actions/track_actions');
const Nav = require('react-bootstrap').Nav;
const NavItem = require('react-bootstrap').NavItem;
const Glyphicon = require('react-bootstrap').Glyphicon;

const Player = React.createClass({
  getInitialState() {
    return({tracks: []})
  },

  _play() {
    let song = document.getElementById('player')
    if (song) {
      song.play();
    }
  },

  _pause() {
    let song = document.getElementById('player')
    if (song) {
      song.pause();
    }
  },

  _next() {
    let front = this.state.tracks.unshift();
    this.state.tracks.push(front);
    debugger
  },

  _back() {
    this.state.tracks.unshift(this.state.tracks.pop());
  },

  _onChange() {
    this.setState({tracks: TrackStore.all()});
  },

  componentDidMount() {
    this.trackListener = TrackStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.trackListener.remove();
  },

  render() {
    let song
    if (this.state.tracks.length > 0) {
      song = <audio id='player' src={this.state.tracks[0].track_url} />
    } else {
      song = <div />
    };

    let player = (<Nav className="music_player">
                    <NavItem className="music_play_item" onClick={this._play}><Glyphicon glyph="play"/></NavItem>
                    <NavItem className="music_play_item" onClick={this._pause}><Glyphicon glyph="pause"/></NavItem>
                    <NavItem className="music_play_item" onClick={this._next}><Glyphicon glyph="forward"/></NavItem>
                    <NavItem className="music_play_item" onClick={this._back}><Glyphicon glyph="backward"/></NavItem>
                    {song}
                  </Nav>)
    return player
  }
});

module.exports = Player;
