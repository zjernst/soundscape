const React = require('react');

const Midsection = React.createClass({
  render() {
    return(
      <div className="midsection_container">
        <div className="midsection_background" />
        <div className="midsection_text">Find your sound.</div>
      </div>
    )
  }
});

module.exports = Midsection;
