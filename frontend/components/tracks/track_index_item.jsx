const React = require('react');
const classNames = require('classnames');
const TrackDetailItem = require('./track_detail_item');

const TrackIndexItem = React.createClass({
  getInitialState() {
    return({details: false})
  },

  _displayDetails() {
    this.setState({details: !this.state.details})
  },

  render() {
    let details
    if (this.state.details) {
      details = <TrackDetailItem track={this.props.track}/>
    } else {
      details = "..."
    }
    return(
      <div className='track_index_item' onClick={this._displayDetails}>
        {this.props.track.title}
        {details}
      </div>
    )
  }
})

module.exports = TrackIndexItem;
