const React = require('react');
const LoginForm = require('./sessions/login_form');
const SignupForm = require('./sessions/signup_form');

const SplashPage = React.createClass({
  getInitialState() {
    return({login: false})
  },

  _displayLogin() {
    this.setState({login: true})
  },

  _closeForm() {
    this.setState({login: false})
  },

  render() {
    let login
    if (this.state.login) {
      login = <SignupForm closeForm={this._closeForm}/>
    }
    return(
      <div className="splash_page">
        {login}
        <div className="info first" onClick={this._displayLogin}>
          <p className="infotext first">Expand your aural palette</p>
          <div className="small_text_container">
          <p className="small_text">Share, collect, and experience ambient sounds of the world</p>
          </div>
        </div>
      </div>
    )
  }
});
// <div className="enter_button_container">
//   <button>Explore the Soundscape</button>
// </div>

// <div className="info second">
//   <p className="infotext second">Listen, share, and collect the gorgeous sounds of our planet</p>
// </div>
// <div className="info third">
//   <p className="infotext third">Explore the Soundscape</p>
// </div>
module.exports = SplashPage;
