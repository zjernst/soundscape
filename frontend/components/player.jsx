const React = require('react');
const TrackStore = require('../stores/track_store');
const TrackActions = require('../actions/track_actions');
const Nav = require('react-bootstrap').Nav;
const NavItem = require('react-bootstrap').NavItem;
const Glyphicon = require('react-bootstrap').Glyphicon;

const Player = React.createClass({
  getInitialState() {
    return({tracks: [], playing: false})
  },

  _play() {
    let song = document.getElementById('player')
    if (song) {
      song.play();
      this.setState({playing: true})
    }
  },

  _pause() {
    let song = document.getElementById('player')
    if (song) {
      song.pause();
      this.setState({playing: false})
    }
  },

  _next() {
    let front = this.state.tracks.shift();
    let newOrder = this.state.tracks
    newOrder.push(front);
    this.setState({tracks: newOrder})
    if (this.state.playing) {
      this.keepPlaying = true
    }
    TrackActions.updateTracks(this.state.tracks);
  },

  _back() {
    let back = this.state.tracks.pop();
    let newOrder = this.state.tracks
    newOrder.unshift(back);
    this.setState({tracks: newOrder})
    if (this.state.playing) {
      this.keepPlaying = true
    }
    TrackActions.updateTracks(this.state.tracks);
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

  componentDidUpdate() {
    if (this.keepPlaying) {
      this._play();
      this.keepPlaying = false
    }
  },

  _onSongEnd() {
    this._next()
  },

  render() {
    let song
    if (this.state.tracks.length > 0) {
      song = <audio id='player' src={this.state.tracks[0].track_url}
              onEnded={this._onSongEnd} />
    } else {
      song = <div />
    };

    let player = (<Nav className="music_player">
                    <NavItem className="music_play_item" onClick={this._play}><Glyphicon glyph="play"/></NavItem>
                    <NavItem className="music_play_item" onClick={this._pause}><Glyphicon glyph="pause"/></NavItem>
                    <NavItem className="music_play_item" onClick={this._back}><Glyphicon glyph="backward"/></NavItem>
                    <NavItem className="music_play_item" onClick={this._next}><Glyphicon glyph="forward"/></NavItem>
                    {song}
                  </Nav>)
    return player
  }
});

module.exports = Player;
