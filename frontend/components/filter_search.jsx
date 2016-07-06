const React = require('react');

const FilterSearch = React.createClass({

  _onInput(e) {
    this.props.updateFilters('query', e.target.value);
  },

  render() {
    return (
      <nav className="tracks_search_box">
        <div className="tracks_search_label">Search Tracks</div>
        <input className="search_box" onInput={this._onInput} />
      </nav>
    );
  }
});

module.exports = FilterSearch;
