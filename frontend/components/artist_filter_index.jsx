const React = require('react');
const ArtistFilterItem = require('./artist_filter_item');
const FilterActions = require('../actions/filter_actions');
const Label = require('react-bootstrap').Label;


const ArtistFilterIndex = React.createClass({
  getInitialState() {
    return({artistsApplied: [], all: true})
  },

  _applyArtist(artist_id) {
    this.setState({all: false});
    if (this.state.artistsApplied.includes(artist_id)) {
      let idx = this.state.artistsApplied.indexOf(artist_id)
      this.state.artistsApplied.splice(idx, 1);
    } else {
      let artists = this.state.artistsApplied
      artists.push(artist_id)
      this.setState({artistsApplied: artists})
    }
    this.props.updateFilters("artists", this.state.artistsApplied);
  },

  _all() {
    this.setState({artistsApplied: [], all: true});
    this.props.updateFilters("artists", []);
  },

  render() {
    let artists = this.props.allArtists.map((artist) => {
      return <ArtistFilterItem artist={artist}
              key={artist.id}
              applyArtist={this._applyArtist}
              all={this.state.all} />
    });
    let allClass = "artist_filter_item"
    if (this.state.all) {
      allClass = allClass + " selected"
    }
    return(
      <div className="artist_filter_index">
        <div className={allClass}
             onClick={this._all}>
             <h4 className="artist_item_text">
             <Label className="artist_label">
             All Artists
             </Label>
             </h4>
         </div>
        {artists}
      </div>
    )
  }
})

module.exports = ArtistFilterIndex;
