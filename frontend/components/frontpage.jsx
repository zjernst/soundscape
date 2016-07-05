const React = require('react');
const SoundscapeIndex = require('./soundscapes/ss_index');
const Header = require('./header');

const Frontpage = React.createClass({
  render() {
    return(
      <div className="frontpage">
        <Header />
        <SoundscapeIndex />
      </div>
    )
  }
});

module.exports = Frontpage;
