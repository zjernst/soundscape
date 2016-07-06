const React = require('react');

const Midsection = React.createClass({
  render() {
    return(
      <div className="midsection_container">
        <div className="midsection_background" />
        <div className="midsection_text">Search the world.</div>
      </div>
    )
  }
});

module.exports = Midsection;
