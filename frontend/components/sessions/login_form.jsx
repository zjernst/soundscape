const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../../actions/session_actions');
const SessionStore = require('../../stores/session_store');
const hashHistory = require('react-router').hashHistory;
const ErrorStore = require('../../stores/error_store');
const Errors = require('../errors');

const NavItem = require('react-bootstrap').NavItem;
const Modal = require('react-bootstrap').Modal;
const FormGroup = require('react-bootstrap').FormGroup;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormControl = require('react-bootstrap').FormControl;
const Button = require('react-bootstrap').Button;

const LoginForm = React.createClass({
  getInitialState() {
    return({username: "", password: "", show: true, formType: "login"})
  },
  // 
  // componentDidMount() {
  //   this.sessionListener = SessionStore.addListener(this._redirectIfLoggedIn)
  //   // this.errorListener = ErrorStore.addListener(this._displayErrors);
  // },
  //
  // componentWillUnmount() {
  //   this.sessionListener.remove();
  //   // this.errorListener.remove();
  // },

  _displayErrors() {
    if (!(ErrorStore.form() === "")) {
      this.setState({username: "", password: ""})
    }
  },
  //
  // _redirectIfLoggedIn() {
  //   if (SessionStore.isUserLoggedIn()) {
  //     hashHistory.push(`/index`);
  //   }
  // },

  // fieldErrors(field) {
  //   const errors = ErrorStore.formErrors(this.formType());
  //
  //   if(!errors[field]) { return; }
  //
  //   const messages = errors[field].map( (errorMsg, i) => {
  //     return <li key={i}>{errorMsg}</li>
  //   });
  //
  //   return <ul>{messages}</ul>
  // },

  _handleSubmit(e) {
    e.preventDefault();
    const formData = {username: this.state.username, password: this.state.password};
    SessionActions.login(formData);
    this.close();
    // if (this.state.formFrom === "login") {
    // } else {
    //   SessionActions.signup(formData);
    // }
  },

  formType() {
    if (this.props.login) {
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

  close() {
    // this.setState({show: false})
    this.props.closeForm();
  },

  open() {
    this.setState({show: true});
  },

  _swapForm() {
    if (this.state.formType === "signup") {
      this.setState({formType: "login"})
    } else {
      this.setState({formType: "signup"})
    }
  },

  demoSignIn: function(e) {
    e.preventDefault();
    this.setState({username: "", password: ""});

    let username = "Charizard".split("");
    let password = "password".split("");
    let time = 50;
    let self = this;

    $(".btn").addClass("disabled");
    $(".btn").attr("disabled", true);
    $("input").attr("disabled", true);

    username.forEach(function(letter) {
      time += 50;
      setTimeout(function() {
        self.setState({username: self.state.username + letter});
      }, time);
    });

    time += 500;

    password.forEach(function(letter) {
      time += 50;
      setTimeout(function() {
        self.setState({password: self.state.password + letter});
      }, time);
    });

    time += 500;

    setTimeout(function() {
      SessionActions.login({
        username: self.state.username,
        password: self.state.password
      });
      self.close();
    }, time);
  },

  handleUsernameChange: function(e) {
    e.preventDefault();
    this.setState({username: e.target.value});
  },

  handlePasswordChange: function(e) {
    e.preventDefault();
    this.setState({password: e.target.value});
  },

  render: function() {
    return (
        <Modal
          show={this.state.show}
          onHide={this.close}
          >
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <form className="modal-form" onSubmit={this._handleSubmit}>
            <FormGroup>
              <ControlLabel>Username</ControlLabel>
              <FormControl
                type="text"
                onChange={this.handleUsernameChange}
                value={this.state.username}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                onChange={this.handlePasswordChange}
                value={this.state.password}
              />
              <FormControl.Feedback/>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Button onClick={this.demoSignIn}>Demo Sign In</Button>
            <Errors />
          </form>
        </Modal>
    );
  }
});

module.exports = LoginForm;

// render() {
//   let altForm
//   if (this.state.formType === "login") {
//     altForm = "signup"
//   } else {
//     altForm = "login"
//   }
//
//   return(
//     <Modal show={this.state.show} onHide={this.close}>
//       <div className="login-form-container">
//         <Modal.Header>Welcome to SoundScape</Modal.Header>
//         <h4>Please {this.formType()}</h4>
//         <form onSubmit={this._handleSubmit} className="login-form">
//           {this.fieldErrors("base")}
//           <FormGroup>
//             <ControlLabel>Username</ControlLabel>
//             {this.fieldErrors("username")}
//             <FormControl type="text" value={this.state.username}
//                    onChange={this._update('username')} />
//           </FormGroup>
//          <FormGroup>
//           <ControlLabel>Password</ControlLabel>
//           {this.fieldErrors("password")}
//           <FormControl type="password" value={this.state.password}
//                  onChange={this._update('password')} />
//           <input type="submit" value={this.formType()} />
//           </FormGroup>
//         </form>
//         <button onClick={this._guestLogin}>Guest</button>
//         <button onClick={this._swapForm}>{altForm}</button>
//       </div>
//     </Modal>
//   )
// }
