const React = require('react');
import { Parallax, Background } from 'react-parallax';

const Midsection = React.createClass({
  render() {
    return(
      <div className="midsection_container">
        <Parallax strength={300}>
        <Background>
          <div className="midsection_background" />
        </Background>
        <div className="midsection_text">Find your sound.
         <p className="midsection_subtext">
          Filter by Soundscapes, Tags, and Artists to find the perfect sound.</p>
        </div>
        </Parallax>
      </div>
    )
  }
});

module.exports = Midsection;

// Broaden your search by looking through multiple Soundscapes
// and Artists, or narrow in by requiring specific Tags.  Use the Search
// field to peer into both Titles and Descriptions to find that exact
// sound you have been seeking.
