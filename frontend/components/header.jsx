const React = require('react');

const Header = React.createClass({
  render() {
    return(
      <section className="header_container">
        <div className="header_background" />
        <div className="header_background_text">Hear the world.</div>
      </section>
    )
  }
});

module.exports = Header;
