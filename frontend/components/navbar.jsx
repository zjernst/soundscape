const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const LoginForm = require('./sessions/login_form');
const SignupForm = require('./sessions/signup_form');
const hashHistory = require('react-router').hashHistory;

const Navbar = React.createClass({
  getInitialState() {
    return({logged_in: SessionStore.isUserLoggedIn(), form: "", logoutButton: false})
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

  _scrollToAdd() {
    $('html,body').animate({
      scrollTop: $('.add_track_container').offset().top - 100},
    'slow');
  },

  _scrollToDiscover() {
    $('html,body').animate({
      scrollTop: $('.soundscape_index').offset().top - 100},
    'slow');
  },

  _scrollToFilter() {
    $('html,body').animate({
      scrollTop: $('.midsection_container').offset().top - 100},
    'slow');
  },

  _mouseEnter() {
    this.setState({logoutButton: true})
  },

  _mouseLeave() {
    this.setState({logoutButton: false})
  },

  render() {
    let logged_in = SessionStore.isUserLoggedIn();
    let buttons = []
    let navlinks
    let logout
    let accountContainer
    let avatar
    if (this.state.logoutButton) {
      logout = <div className="logout_container">
                <button className="nav_button_logout" key="logout" onClick={this._logout}>Logout</button>
               </div>
    }
    if (logged_in) {
      navlinks = (
        <div className="nav_links">
          <a className="navlink" onClick={this._scrollToDiscover}>Discover</a>
          <a className="navlink" onClick={this._scrollToFilter}>Search</a>
          <a className="navlink" onClick={this._scrollToAdd}>Contribute</a>
        </div>)
      accountContainer = (
        <div className="account_container" onClick={this._gotoUserpage}>
          {SessionStore.currentUser().username}
        </div>
      )
      avatar = (
        <div className="nav_avatar"
             onMouseEnter={this._mouseEnter}
             onMouseLeave={this._mouseLeave}>
          <img className="nav_profile_pic"
               src={SessionStore.currentUser().profile_pic}
               />
          {logout}
        </div>
      )
    } else {
      buttons.push(<button className="nav_button" key="signup" onClick={this._toSignup}>Sign Up</button>);
      buttons.push(<button className="nav_button" key="login" onClick={this._toLogin}>Log In</button>);
    }
    return(
      <div className="navbar">
        {this.state.form}
        <div className="logo_container">
          <h2 className="logo" onClick={this._gotoIndex}>sound s_c_a_p_e</h2>
        </div>
        {navlinks}
        <div className="nav_button_container">
          {buttons}
        </div>
        {accountContainer}
        {avatar}
      </div>
    )
  }
})

module.exports = Navbar;

// buttons.push(<button className="nav_button" key="guest" onClick={this._handleGuest}>Guest</button>);

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
