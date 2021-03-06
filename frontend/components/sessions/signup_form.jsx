const React = require('react');
const SessionActions = require('../../actions/session_actions.js');
const ErrorActions = require('../../actions/error_actions.js');
const hashHistory = require('react-router').hashHistory;
const ErrorStore = require('../../stores/error_store.js');
const Errors = require('../errors');
const UserStore = require('../../stores/user_store.js');
const NavItem = require('react-bootstrap').NavItem;
const Modal = require('react-bootstrap').Modal;
const FormGroup = require('react-bootstrap').FormGroup;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormControl = require('react-bootstrap').FormControl;
const Button = require('react-bootstrap').Button;

const SigninForm = React.createClass({
  getInitialState: function() {
    return { show: true, username: "", password1: "", password2: ""};
  },

  close: function() {
    this.setState({ show: false });
    this.props.closeForm();
  },

  open: function() {
    this.setState({ show: true });
  },

  handleUsernameChange: function(e) {
    e.preventDefault();
    this.setState({username: e.target.value});
  },

  handlePasswordChange: function(e) {
    e.preventDefault();
    this.setState({password1: e.target.value});
  },

  handlePasswordChange2: function(e) {
    e.preventDefault();
    this.setState({password2: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (this.getValidationState() === 'success') {
      SessionActions.signup({
        username: this.state.username,
        password: this.state.password1
      });
      if (ErrorStore.all().length === 0){
        this.close();
        this.setState({ show: false, username: "", password1: "", password2: ""});
      }
    } else {
      ErrorActions.receiveErrors(['Passwords must match and be 6 or more characters']);
    }
  },

  getValidationState: function() {
    if ((this.state.password1.length === 0) &&
        (this.state.password2.length === 0)) {
      return null;
    }
    if ((this.state.password1 === this.state.password2) &&
        (this.state.password1.length > 5)) {
      return 'success';
    } else {
      return 'error';
    }
  },

  demoSignIn: function(e) {
    e.preventDefault();
    this.setState({username: "", password1: "", password2: ""});

    let username = "Blastoise".split("");
    let password = "password".split("");
    let time = 50;
    let that = this;

    $(".btn").addClass("disabled");
    $(".btn").attr("disabled", true);
    $("input").attr("disabled", true);

    username.forEach(function(letter) {
      time += 50;
      setTimeout(function() {
        that.setState({username: that.state.username + letter});
      }, time);
    });

    time += 500;

    password.forEach(function(letter) {
      time += 50;
      setTimeout(function() {
        that.setState({password1: that.state.password1 + letter});
      }, time);
    });

    time += 500;

    password.forEach(function(letter) {
      time += 50;
      setTimeout(function() {
        that.setState({password2: that.state.password2 + letter});
      }, time);
    });

    time += 500;

    setTimeout(function() {
      SessionActions.login({
        username: that.state.username,
        password: that.state.password1
      });
      that.close();
    }, time);
  },

  render: function() {
    return (
        <Modal
          show={this.state.show}
          onHide={this.close}
          >
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <form className="modal-form" onSubmit={this.handleSubmit}>
            <FormGroup>
              <ControlLabel>Username</ControlLabel>
              <FormControl
                type="text"
                onChange={this.handleUsernameChange}
                value={this.state.username}
              />
            </FormGroup>
            <FormGroup
              validationState={this.getValidationState()}
            >
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                onChange={this.handlePasswordChange}
                value={this.state.password1}
              />
              <FormControl.Feedback/>
            </FormGroup>
            <FormGroup
              validationState={this.getValidationState()}
            >
              <ControlLabel>Confirm Password</ControlLabel>
              <FormControl
                type="password"
                onChange={this.handlePasswordChange2}
                value={this.state.password2}
              />
              <FormControl.Feedback/>
            </FormGroup>
            <Button type="submit">Submit</Button>
            <Button onClick={this.demoSignIn}>Demo Sign In</Button>
          </form>
          <Errors />
        </Modal>
    );
  }

});

module.exports = SigninForm;
