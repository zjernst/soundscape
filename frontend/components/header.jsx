const React = require('react');
import { Parallax, Background } from 'react-parallax';

const Header = React.createClass({
  render() {
    return (
      <div className="header_container">
        <Parallax strength={400}>
        <Background>
          <div className="header_background" />
          <div className="header_background_text">Hear the world.</div>
        </Background>
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
