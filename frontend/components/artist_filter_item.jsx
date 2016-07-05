const React = require('react');
const Label = require('react-bootstrap').Label;
const FilterActions = require('../actions/filter_actions');
const classNames = require('classnames');

const ArtistFilterItem = React.createClass({
  getInitialState() {
    return({seleted: false})
  },

  _artistFilter() {
    this.props.applyArtist(this.props.artist.id)
    this.setState({selected: !this.state.selected})
  },

  render() {
    let artistClass
    if (this.state.selected) {
      artistClass = classNames("artist_filter_item", "selected")
    } else {
      artistClass = "artist_filter_item"
    }
    return(
      <div className={artistClass} onClick={this._artistFilter}>
        <h4 className="artist_item_text"><Label className="artist_label">{this.props.artist.username}</Label></h4>
      </div>
    )
  }
})

module.exports = ArtistFilterItem;
