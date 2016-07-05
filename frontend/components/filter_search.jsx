const React = require('react');

const FilterSearch = React.createClass({

  _onInput(e) {
    this.props.updateFilters('query', e.target.value);
  },

  render() {
    return (
      <nav className="tracks-search-box">
        <label htmlFor="search-box">Search Tracks</label>
        <br />
        <input id="search-box" onInput={this._onInput} />
      </nav>
    );
  }
});

module.exports = FilterSearch;
