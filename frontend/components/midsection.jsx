const React = require('react');
import { Parallax } from 'react-parallax';

const Midsection = React.createClass({
  render() {
    return(
      <div className="midsection_container">
        <Parallax bgImage='https://res.cloudinary.com/soundscape/image/upload/v1467349002/beachwaves_qgvy7z.jpg' strength={300}>
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
