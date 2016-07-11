const React = require('react');

const Midsection = React.createClass({
  render() {
    return(
      <div className="midsection_container">
        <div className="midsection_background" />
        <div className="midsection_text">Find your sound.
         <p className="midsection_subtext">
          Broaden your search by looking through multiple Soundscapes
          and Artists, or narrow in by requiring specific Tags.  Use the Search
          field to peer into both Titles and Descriptions to find that exact
          sound you have been seeking.</p>
        </div>
      </div>
    )
  }
});

module.exports = Midsection;
