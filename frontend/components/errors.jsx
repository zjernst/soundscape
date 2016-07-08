const React = require('react');
const ErrorStore = require('../stores/error_store.js');

const Errors = React.createClass({
  getInitialState: function () {
    return { errors: [] };
  },

  componentDidMount: function() {
    this.errorListener = ErrorStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.errorListener.remove();
  },

  _onChange: function() {
    this.setState({ errors: ErrorStore.all() });
  },

  render: function() {
    let errors = this.state.errors.map(function(error, i) {
      return <li key={i}>{error}</li>;
    });
    return (
      <ul>
        {errors}
      </ul>
    );
  }
});

module.exports = Errors;
