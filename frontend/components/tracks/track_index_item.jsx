const React = require('react');
const classNames = require('classnames');

const TrackIndexItem = React.createClass({
  render() {
    return(
      <div className='track_index_item'>
        {this.props.track.title}
      </div>
    )
  }
})

module.exports = TrackIndexItem;
