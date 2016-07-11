const React = require('react');
const ErrorStore = require('../stores/error_store.js');

const Errors = React.createClass({
  getInitialState: function () {
    return { errors: {} };
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
    let errorKeys = Object.keys(this.state.errors)
    let errors = errorKeys.map((key, i) => {
      return <li key={i}>{this.state.errors[key]}</li>;
    });
    return (
      <ul>
        {errors}
      </ul>
    );
  }
});

module.exports = Errors;
