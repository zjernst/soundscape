const React = require('react');
const TagStore = require('../stores/tag_store');
const FilterStore = require('../stores/filter_store');
const SoundscapeStore = require('../stores/soundscape_store');
const SoundscapeActions = require('../actions/soundscape_actions');
const FilterActions = require('../actions/filter_actions');
const TrackIndex = require('./tracks/track_index');
const TagActions = require('../actions/tag_actions');
const TagIndex = require('./tags/tag_index');
const SoundscapesFilterIndex = require('./soundscapes_filter_index');

const Filter = React.createClass({
  getInitialState() {
    return({allTags: [], tags: [], allSoundscapes: [], soundscapes: []})
  },

  componentDidMount() {
    this.tagListener = TagStore.addListener(this._onTagChange)
    this.ssStoreListener = SoundscapeStore.addListener(this._onSSChange)
    TagActions.fetchAllTags();
    SoundscapeActions.fetchAllSoundscapes();
  },

  componentWillUnmount() {
    this.tagListener.remove();
    this.ssStoreListener.remove();
  },

  _onTagChange() {
    this.setState({allTags: TagStore.all()})
  },

  _onSSChange() {
    this.setState({allSoundscapes: SoundscapeStore.all()})
  },

  _updateFilters(filter, content) {
    this.setState({[filter]: content})
  },

  componentWillUpdate(newProps, newState) {
    if (newState !== this.state) {
      let filters = {tags: newState.tags, soundscapes: newState.soundscapes}
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
      </div>
    )
  }
});

module.exports = Filter;
