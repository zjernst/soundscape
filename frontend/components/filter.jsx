const React = require('react');
const TagStore = require('../stores/tag_store');
const FilterStore = require('../stores/filter_store');
const SoundscapeStore = require('../stores/soundscape_store');
const SoundscapeActions = require('../actions/soundscape_actions');
const FilterActions = require('../actions/filter_actions');
const UserActions = require('../actions/user_actions');
const TrackIndex = require('./tracks/track_index');
const TagActions = require('../actions/tag_actions');
const TagIndex = require('./tags/tag_index');
const SoundscapesFilterIndex = require('./soundscapes_filter_index');
const ArtistFilterIndex = require('./artist_filter_index');
const TrackSearchBox = require('./filter_search');
const Filter = React.createClass({
  getInitialState() {
    return({allTags: [], tags: [],
            allSoundscapes: [], soundscapes: [],
            allArtists: [], artists: [],
            query: ""})
  },

  componentDidMount() {
    this.tagListener = TagStore.addListener(this._onTagChange)
    this.ssStoreListener = SoundscapeStore.addListener(this._onSSChange)
    TagActions.fetchAllTags();
    SoundscapeActions.fetchAllSoundscapes();
    UserActions.fetchAllUsers();
    this.userListener = UserStore.addListener(this._onUserChange);
  },

  componentWillUnmount() {
    this.tagListener.remove();
    this.ssStoreListener.remove();
    this.userListener.remove();
  },

  _onTagChange() {
    this.setState({allTags: TagStore.all()})
  },

  _onSSChange() {
    this.setState({allSoundscapes: SoundscapeStore.all()})
  },

  _onUserChange() {
    this.setState({allArtists: UserStore.all()})
  },

  _updateFilters(filter, content) {
    this.setState({[filter]: content})
  },

  componentWillUpdate(newProps, newState) {
    if (newState != this.state) {
      let filters = {filters: {tags: newState.tags,
                     soundscapes: newState.soundscapes,
                     artists: newState.artists,
                     query: newState.query}}
      FilterActions.fetchAllTracks(filters)
    }
  },

  // _updateResults() {
  //   let filters = {tags: this.state.tags}
  //   FilterActions.fetchAllTracks(filters)
  // },

  render() {
    return(
      <div className="filter_container">
        <div className="ss_filter_container">
          <SoundscapesFilterIndex updateFilters={this._updateFilters}
                                  allSoundscapes={this.state.allSoundscapes}/>
        </div>
        <div className="tag_index_container">
          <TagIndex updateFilters={this._updateFilters}
                    allTags={this.state.allTags} />
        </div>
        <div className="artist_index_container">
          <ArtistFilterIndex updateFilters={this._updateFilters}
                    allArtists={this.state.allArtists} />
        </div>
        <TrackSearchBox updateFilters={this._updateFilters} />
      </div>
    )
  }
});

module.exports = Filter;
