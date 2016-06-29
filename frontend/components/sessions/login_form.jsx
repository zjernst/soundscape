const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const hashHistory = require('react-router').hashHistory;
const ErrorStore = require('../../stores/error_store');

const LoginForm = React.createClass({
  getInitialState() {
    return({username: "", password: ""})
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this._redirectIfLoggedIn)
    this.errorListener = ErrorStore.addListener(this._displayErrors);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
    this.errorListener.remove();
  },

  _displayErrors() {
    if (!(ErrorStore.form() === "")) {
      this.setState({username: "", password: ""})
    }
  },

  _redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push(`users/${SessionStore.currentUser().id}`);
    }
  },

  fieldErrors(field) {
    const errors = ErrorStore.formErrors(this.formType());

    if(!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={i}>{errorMsg}</li>
    });

    return <ul>{messages}</ul>
  },

  _handleSubmit(e) {
    e.preventDefault();
    const formData = {username: this.state.username, password: this.state.password};
    if (this.props.location.pathname === "/login") {
      SessionActions.login(formData);
    } else {
      SessionActions.signup(formData);
    }
  },

  formType() {
    if (this.props.location.pathname.slice(1) === "login") {
      return "login"
    } else {
      return "signup"
    }
  },

  _update(property) {
    return (e) => this.setState({[property]: e.target.value})
  },

  _guestLogin() {
    let guest = {username: 'Charizard', password: 'password'}
    SessionActions.login(guest);
  },

  render() {
    let altForm
    if (this.formType() === "login") {
      altForm = "signup"
    } else {
      altForm = "login"
    }

    return(
      <div className="login-form-container">
        <h1>~..~ Welcome to SoundScape ~..~</h1>
        <h4>Please {this.formType()}</h4>
        <form onSubmit={this._handleSubmit} className="login-form">
          {this.fieldErrors("base")}
          <label>Username:</label>
          {this.fieldErrors("username")}
          <input type="text" value={this.state.username}
                 onChange={this._update('username')} />
          <label>Password:</label>
          {this.fieldErrors("password")}
          <input type="password" value={this.state.password}
                 onChange={this._update('password')} />
          <input type="submit" value={this.formType()} />
        </form>
        <button onClick={this._guestLogin}>Guest</button>
        <Link to={altForm}>{altForm}</Link>
      </div>
    )
  }
});

module.exports = LoginForm;
