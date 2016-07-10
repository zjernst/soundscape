const React = require('react');
const classNames = require('classnames');
const TrackDetailItem = require('./track_detail_item');
const Glyphicon = require('react-bootstrap').Glyphicon;
const hashHistory = require('react-router').hashHistory;

const TrackIndexItem = React.createClass({
  getInitialState() {
    return({details: false})
  },

  _displayDetails() {
    this.setState({details: true})
  },

  _hideDetails() {
    this.setState({details: false})
  },

  _addToPlayer() {
    TrackActions.setPlaying(this.props.track)
  },

  _toArtist() {
    hashHistory.push(`/users/${this.props.track.artist_id}`)
  },

  render() {
    let details
    if (this.state.details) {
      details = <TrackDetailItem track={this.props.track} hideDetails={this._hideDetails}/>
    }// else {
    //   details = <div onClick={this._displayDetails}>...</div>
    // }
    return(
      <div className='track_index_item'>
        <div className="track_item_header">
          <div className='track_play_button' onClick={this._addToPlayer}>
            <Glyphicon className="track_index_play" glyph="play-circle" />
          </div>
          <div className='track_index_title' onClick={this._displayDetails}>
            {this.props.track.title}
          </div>
          <div className="track_index_artist" onClick={this._toArtist}>
            {this.props.parent === "user" ? this.props.track.downloads : this.props.track.artist}
          </div>
        </div>
        {details}
      </div>
    )
  }
})

module.exports = TrackIndexItem;
