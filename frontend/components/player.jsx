const React = require('react');
const ReactPlayer = require('react-player');
const TrackStore = require('../stores/track_store');
const TrackActions = require('../actions/track_actions');
const Nav = require('react-bootstrap').Nav;
const NavItem = require('react-bootstrap').NavItem;
const Glyphicon = require('react-bootstrap').Glyphicon;

const Player = React.createClass({
  getInitialState() {
    return({tracks: [],
            playing: true,
            played: 0,
            paused: false,
            duration: 0})
  },

  _play() {
    this.setState({playing: true})
  },

  _pause() {
    this.setState({playing: false})
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

  _onSongEnd() {
    this._next()
  },

  _seekMouseDown(e) {
    this.setState({seeking: true})
  },

  _seekMouseUp(e) {
    this.setState({seeking: false})
    this.refs.player.seekTo(parseFloat(e.target.value))
  },

  _seekChange(e) {
    this.setState({played: parseFloat(e.target.value)})
  },

  _onProgress(state) {
    if (!this.state.seeking) {
      this.setState(state)
    }
  },

  autoplay() {
    if (this.state.playing) {
      this._play()
    }
  },

  render() {
    let song
    if (this.state.tracks[0]) {
      song = this.state.tracks[0].track_url
    }
    let player = (<Nav className="music_player">
                    <NavItem className="music_play_item" onClick={this._play}><Glyphicon glyph="play"/></NavItem>
                    <NavItem className="music_play_item" onClick={this._pause}><Glyphicon glyph="pause"/></NavItem>

                      <input
                        className="progress_bar"
                        type="range"
                        value={this.state.played}
                        min="0"
                        max="1"
                        step="any"
                        onInput={this.seek}
                        onMouseDown={this._seekMouseDown}
                        onMouseUp={this._seekMouseUp}
                        onChange={this._seekChange}
                      />
                      <NavItem className="music_play_item" onClick={this._back}><Glyphicon glyph="backward"/></NavItem>
                      <NavItem className="music_play_item" onClick={this._next}><Glyphicon glyph="forward"/></NavItem>
                  </Nav>)
    return (
      <div className="player_container">
        <ReactPlayer url={song}
                     className="react_player"
                     id='react_song'
                     ref='player'
                     onPlay={() => this.setState({playing: true})}
                     onPause={() => this.setState({playing: false})}
                     onEnded={() => this.setState({playing: false})}
                     playing={this.state.playing}
                     onEnded={this._onSongEnd}
                     onProgress={this._onProgress}
                     />
        {player}
      </div>
    )
  }
})

// const Player = React.createClass({
//
//
//
//   componentDidUpdate() {
//     if (this.keepPlaying) {
//       this._play();
//       this.keepPlaying = false
//     }
//   },
//
// _play() {
//   let song = document.getElementById('player')
//   if (song) {
//     song.play();
//     this.setState({playing: true});
//     this.setState({paused: false})
//   }
// },
// _pause() {
//   let song = document.getElementById('player')
//   if (song) {
//     song.pause();
//     this.setState({playing: false});
//     this.setState({paused: true})
//   }
// },
//
//   render() {
//     let song
//     if (this.state.tracks.length > 0) {
//       song = <audio id='player' src={this.state.tracks[0].track_url}
//               onEnded={this._onSongEnd}
//               onTimeUpdate={this._onTimeUpdate} />
//     } else {
//       song = <div />
//     };
//
//     let player = (<Nav className="music_player">
//                     <NavItem className="music_play_item" onClick={this._play}><Glyphicon glyph="play"/></NavItem>
//                     <NavItem className="music_play_item" onClick={this._pause}><Glyphicon glyph="pause"/></NavItem>
//
//                       <input
//                         className="progress_bar"
//                         type="range"
//                         value={this.state.played}
//                         min="0"
//                         max="100"
//                         step="0.01"
//                         onInput={this.seek}
//                       />
//                       <NavItem className="music_play_item" onClick={this._back}><Glyphicon glyph="backward"/></NavItem>
//                       <NavItem className="music_play_item" onClick={this._next}><Glyphicon glyph="forward"/></NavItem>
//                     {song}
//                     {this.autoplay()}
//                   </Nav>)
//     return player
//   }
// });

module.exports = Player;
