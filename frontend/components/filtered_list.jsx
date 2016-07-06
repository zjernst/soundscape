const React = require('react');
const TagStore = require('../stores/tag_store');
const FilterStore = require('../stores/filter_store');
const SoundscapeStore = require('../stores/soundscape_store');
const FilterActions = require('../actions/filter_actions');
const TrackIndex = require('./tracks/track_index');
const Filter = require('./filter');

const FilteredList = React.createClass({
  getInitialState() {
    return({results: [], tags: []})
  },

  componentDidMount() {
    this.filterListener = FilterStore.addListener(this._onChange)
    FilterActions.fetchAllTracks({filters: {}});
  },

  componentWillUnmount() {
    this.filterListener.remove();
  },

  _onChange() {
    this.setState({results: FilterStore.all()})
  },

  render() {
    return(
      <div className="filtered_list_container">
        <Filter />
        <div className="filter_track_index">
          <TrackIndex tracks={this.state.results} />
        </div>
      </div>
    )
  }
});

module.exports = FilteredList
