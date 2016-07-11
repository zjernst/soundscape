const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const LoginForm = require('./sessions/login_form');
const SignupForm = require('./sessions/signup_form');
const hashHistory = require('react-router').hashHistory;

const Navbar = React.createClass({
  getInitialState() {
    return({logged_in: SessionStore.isUserLoggedIn(), form: ""})
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  _onChange() {
    this.setState({logged_in: SessionStore.isUserLoggedIn()})
    if (window.location.pathname === '/' && SessionStore.isUserLoggedIn()) {
      hashHistory.push('/index');
    }
  },

  _toSignup() {
    this.setState({form: <SignupForm closeForm={this._close}/>})
  },

  _toLogin() {
    this.setState({form: <LoginForm closeForm={this._close}/>})
  },

  _close() {
    this.setState({form: ""})
  },

  _handleGuest() {
    let guest = {username: 'Charizard', password: 'password'}
    SessionActions.login(guest);
  },

  _gotoIndex() {
    hashHistory.push('/index')
  },

  _gotoUserpage() {
    hashHistory.push(`/users/${SessionStore.currentUser().id}`)
  },

  _logout() {
    SessionActions.logout();
    hashHistory.push('/');
  },

  render() {
    let logged_in = SessionStore.isUserLoggedIn();
    let buttons = []
    if (logged_in) {
      buttons.push(<button className="nav_button" key="logout" onClick={this._logout}>Logout</button>)
    } else {
      buttons.push(<button className="nav_button" key="signup" onClick={this._toSignup}>Sign Up</button>);
      buttons.push(<button className="nav_button" key="login" onClick={this._toLogin}>Log In</button>);
      buttons.push(<button className="nav_button" key="guest" onClick={this._handleGuest}>Guest</button>);
    }
    return(
      <div className="navbar">
        {this.state.form}
        <div className="logo_container">
          <h2 className="logo" onClick={this._gotoIndex}>sound s_c_a_p_e</h2>
        </div>
        {buttons}
        <div className="account_container" onClick={this._gotoUserpage}>
          {SessionStore.currentUser().username}
        </div>
      </div>
    )
  }
})

module.exports = Navbar;

// <Navbar>
//   <Navbar.Header>
//     <Navbar.Brand>
//       <h2 className="logo" onClick={this._gotoIndex}>sound s_c_a_p_e</h2>
//     </Navbar.Brand>
//   </Navbar.Header>
//   <Nav pullRight>
//     {buttons}
//   </Nav>
//     <Nav pullRight>
//       <div className="account_container" onClick={this._gotoUserpage}>
//         {SessionStore.currentUser().username}
//       </div>
//     </Nav>
// </Navbar>
