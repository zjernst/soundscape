const React = require('react');

const TrackDetailItem = React.createClass({
  render() {
    return(
      <div className="track_detail_item">
        {this.props.track.description}
        <audio controls="controls" src={this.props.track.track_url} />
      </div>
    )
  }
});

module.exports = TrackDetailItem;
