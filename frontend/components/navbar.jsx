const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const hashHistory = require('react-router').hashHistory;

const Navbar = React.createClass({
  getInitialState() {
    return({logged_in: SessionStore.isUserLoggedIn()})
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  _onChange() {
    this.setState({logged_in: SessionStore.isUserLoggedIn()})
  },

  _toSignup() {
    hashHistory.push('/signup');
  },

  _toLogin() {
    hashHistory.push('login');
  },

  _handleGuest() {
    let guest = {username: 'charizard', password: 'password'}
    SessionActions.login(guest);
  },

  render() {
    let logged_in = SessionStore.isUserLoggedIn();
    let buttons = []
    if (logged_in) {
      buttons.push(<button className="nav_button" key="logout" onClick={SessionActions.logout}>Logout</button>)
    } else {
      buttons.push(<button className="nav_button" key="signup" onClick={this._toSignup}>Sign Up</button>);
      buttons.push(<button className="nav_button" key="login" onClick={this._toLogin}>Log In</button>);
      buttons.push(<button className="nav_button" key="guest" onClick={this._handleGuest}>Guest</button>);
    }
    return(
      <div className="navbar">
        <div className="logo_container">
          <h2 className="logo">sound s_c_a_p_e</h2>
        </div>
        {buttons}
        <div className="account_container">
          {SessionStore.currentUser().username}
        </div>
      </div>
    )
  }
})

module.exports = Navbar;
