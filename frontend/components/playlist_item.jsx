const React = require('react');
const PlaylistItemDetail = require('./playlist_item_detail');

const PlaylistItem = React.createClass({
  getInitialState() {
    return({details: this.props.details, track: this.props.track})
  },

  componentWillReceiveProps(newProps) {
    this.setState({details: newProps.details, track: this.props.track})
  },

  render() {
    let details
    if (this.state.details) {
      details = <PlaylistItemDetail track={this.state.track}/>
    }
    return(
      <div className="playlist_item">
        {this.state.track.soundscape_id}
        {details}
      </div>
    )
  }

});

module.exports = PlaylistItem;
