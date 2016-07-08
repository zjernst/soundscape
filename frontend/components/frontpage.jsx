const React = require('react');
const SoundscapeIndex = require('./soundscapes/ss_index');
const Header = require('./header');
const Midsection = require('./midsection');
const FilteredList = require('./filtered_list');
const AddTrack = require('./tracks/add_track');

const Frontpage = React.createClass({
  render() {
    return(
      <div className="frontpage">
        <Header />
        <SoundscapeIndex />
        <Midsection />
        <FilteredList />
        <AddTrack />
      </div>
    )
  }
});

module.exports = Frontpage;
