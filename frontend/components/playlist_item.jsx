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

    const icons = {
      1: <i className="fa fa-tint playlist_icon" aria-hidden="true"></i>,
      2: <i className="fa fa-life-ring playlist_icon" aria-hidden="true"></i>,
      3: <i className="fa fa-cloud playlist_icon" aria-hidden="true"></i>,
      4: <i className="fa fa-building playlist_icon" aria-hidden="true"></i>,
      5: <i className="fa fa-tree playlist_icon" aria-hidden="true"></i>,
      6: <i className="fa fa-home playlist_icon" aria-hidden="true"></i>,
      7: <i className="fa fa-fire playlist_icon" aria-hidden="true"></i>,
      8: <i className="fa fa-coffee playlist_icon" aria-hidden="true"></i>
    }
    let itemClass = "playlist_item"
    if (this.props.playing) {
      itemClass = itemClass + " playing"
    }
    return(
      <div className={itemClass}>
        {icons[this.state.track.soundscape_id]}
        {details}
      </div>
    )
  }

});

module.exports = PlaylistItem;
