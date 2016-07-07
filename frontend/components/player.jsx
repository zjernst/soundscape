const React = require('react');
const TrackStore = require('../stores/track_store');
const TrackActions = require('../actions/track_actions');
const Nav = require('react-bootstrap').Nav;
const NavItem = require('react-bootstrap').NavItem;
const Glyphicon = require('react-bootstrap').Glyphicon;

const Player = React.createClass({
  getInitialState() {
    return({tracks: [], playing: false, percentPlayed: 0, paused: false})
  },

  _play() {
    let song = document.getElementById('player')
    if (song) {
      song.play();
      this.setState({playing: true});
      this.setState({paused: false})
    }
  },

  _pause() {
    let song = document.getElementById('player')
    if (song) {
      song.pause();
      this.setState({playing: false});
      this.setState({paused: true})
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
    this.setState({playing: true, tracks: TrackStore.all()});
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

  _onTimeUpdate(e) {
    e.preventDefault();
    let song = document.getElementById('player')
    let duration = song.duration
    let timePlayed = song.currentTime
    this.setState({percentPlayed: (timePlayed/duration) * 100})
  },

  _seek(e) {
    e.preventDefault();
    let song = document.getElementById('player')
    let targetTime = (e.target.value / 100) * song.duration;
    song.currentTime = targetTime;
  },

  autoplay() {
    if (this.state.playing) {
      this._play()
    }
  },

  render() {
    let song
    if (this.state.tracks.length > 0) {
      song = <audio id='player' src={this.state.tracks[0].track_url}
              onEnded={this._onSongEnd}
              onTimeUpdate={this._onTimeUpdate} />
    } else {
      song = <div />
    };

    let player = (<Nav className="music_player">
                    <NavItem className="music_play_item" onClick={this._play}><Glyphicon glyph="play"/></NavItem>
                    <NavItem className="music_play_item" onClick={this._pause}><Glyphicon glyph="pause"/></NavItem>

                      <input
                        className="progress_bar"
                        type="range"
                        value={this.state.percentPlayed}
                        min="0"
                        max="100"
                        step="0.01"
                        onInput={this.seek}
                      />
                      <NavItem className="music_play_item" onClick={this._back}><Glyphicon glyph="backward"/></NavItem>
                      <NavItem className="music_play_item" onClick={this._next}><Glyphicon glyph="forward"/></NavItem>
                    {song}
                    {this.autoplay()}
                  </Nav>)
    return player
  }
});

module.exports = Player;
