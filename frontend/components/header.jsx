const React = require('react');
import { Parallax } from 'react-parallax';

const Header = React.createClass({
  render() {
    return (
      <div className="header_container">
        <Parallax bgImage='https://res.cloudinary.com/soundscape/image/upload/v1467305571/foggy_forest_qmxcjc.jpg' strength={400}>
          <div className="header_background_text">Hear the world.</div>
        </Parallax>
      </div>
    )
  }
});

// const Header = React.createClass({
//   render() {
//     return(
//       <section className="header_container">
//         <div className="header_background" />
//       </section>
//     )
//   }
// });

module.exports = Header;
