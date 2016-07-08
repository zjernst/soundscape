const React = require('react');

const NullTrack = React.createClass({
  _scrollToLink() {
    $('html,body').animate({
      scrollTop: $('.add_track_container').offset().top - 100},
    'slow');
  },

  render () {
    return(
      <div className="null track_index_item">
        <div className="null_text">
          <p>No Results Found</p>
        </div>
        <div className="link_to_add">
          <a onClick={this._scrollToLink}>Have something in mind? Be the sound in the world you want to hear!</a>
        </div>
      </div>
    )
  }
});

module.exports = NullTrack;
