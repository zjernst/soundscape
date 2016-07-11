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

  componentWillReceiveProps(newProps) {
    if (newProps.all) {
      this.setState({selected: false})
    }
  },

  render() {
    let artistClass
    if (this.state.selected) {
      artistClass = classNames("artist_label", "selected")
    } else {
      artistClass = "artist_label"
    }
    return(
      <div className="artist_filter_item" onClick={this._artistFilter}>
        <h4 className="artist_item_text"><Label className={artistClass}>{this.props.artist.username}</Label></h4>
      </div>
    )
  }
})

module.exports = ArtistFilterItem;
