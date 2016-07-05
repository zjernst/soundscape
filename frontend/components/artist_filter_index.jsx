const React = require('react');
const ArtistFilterItem = require('./artist_filter_item');
const FilterActions = require('../actions/filter_actions');

const ArtistFilterIndex = React.createClass({
  getInitialState() {
    return({artistsApplied: []})
  },

  _applyArtist(artist_id) {
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

  render() {
    let artists = this.props.allArtists.map((artist) => {
      return <ArtistFilterItem artist={artist}
              key={artist.id}
              applyArtist={this._applyArtist} />
    });
    return(
      <div className="artist_filter_index">
        {artists}
      </div>
    )
  }
})

module.exports = ArtistFilterIndex;
