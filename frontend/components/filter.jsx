const React = require('react');
const TagStore = require('../stores/tag_store');
const FilterStore = require('../stores/filter_store');
const SoundscapeStore = require('../stores/soundscape_store');
const FilterActions = require('../actions/filter_actions');
const TrackIndex = require('./tracks/track_index');
const TagActions = require('../actions/tag_actions');
const TagIndex = require('./tags/tag_index');

const Filter = React.createClass({
  getInitialState() {
    return({results: [], tags: []})
  },

  componentDidMount() {
    this.filterListener = FilterStore.addListener(this._onChange)
    this.tagListener = TagStore.addListener(this._onChange)
    FilterActions.fetchAllTracks();
    TagActions.fetchAllTags();
  },

  componentWillUnmount() {
    this.filterListener.remove();
    this.tagListener.remove();
  },

  _onChange() {
    this.setState({results: FilterStore.filtered(), tags: TagStore.all()})
  },

  render() {
    return(
      <div className="filter_container">
        <div className="tag_index_container">
          <TagIndex tags={this.state.tags} />
        </div>
        <div className="filter_track_index">
          <TrackIndex tracks={this.state.results} />
        </div>
      </div>
    )
  }
});

module.exports = Filter;
