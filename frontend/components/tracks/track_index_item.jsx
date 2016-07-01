const React = require('react');
const classNames = require('classnames');
const TrackDetailItem = require('./track_detail_item');

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

  render() {
    let details
    if (this.state.details) {
      details = <TrackDetailItem track={this.props.track} hideDetails={this._hideDetails}/>
    } else {
      details = <div onClick={this._displayDetails}>...</div>
    }
    return(
      <div className='track_index_item'>
        <div className='track_index_title' onClick={this._displayDetails}>
          {this.props.track.title}
        </div>
        {details}
      </div>
    )
  }
})

module.exports = TrackIndexItem;
