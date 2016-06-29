const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const hashHistory = require('react-router').hashHistory

const LoginForm = React.createClass({
  getInitialState() {
    return({username: "", password: ""})
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this._redirectIfLoggedIn)
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  _redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push(`users/${SessionStore.currentUser().id}`);
    }
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
          <label>Username:</label>
          <input type="text" value={this.state.username}
                 onChange={this._update('username')} />
          <label>Password:</label>
          <input type="password" value={this.state.password}
                 onChange={this._update('password')} />
          <input type="submit" value={this.formType()} />
        </form>
        <Link to={altForm}>{altForm}</Link>
      </div>
    )
  }
});

module.exports = LoginForm;
