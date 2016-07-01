const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const SessionApiUtil = window.SessionApiUtil = require('./util/session_api_util');
const SessionActions = window.SessionActions = require('./actions/session_actions');
const SessionStore = window.SessionStore = require('./stores/session_store');
const UserStore = window.UserStore = require('./stores/user_store');
const UserActions = window.UserActions = require('./actions/user_actions');
const ErrorStore = window.ErrorStore = require('./stores/error_store');
const ErrorActions = window.ErrorActions = require('./actions/error_actions');
const SoundscapeStore = window.ssStore = require('./stores/soundscape_store');
const TrackActions = window.TrackActions = require('./actions/track_actions');
const TrackStore = window.TrackStore = require('./stores/track_store');

const LoginForm = require('./components/sessions/login_form');
const UserPage = require('./components/users/user_page');
const SoundscapeIndex = require('./components/soundscapes/ss_index');
const Navbar = require('./components/navbar');
const SoundscapeDetail = require('./components/soundscapes/ss_detail');
const Player = require('./components/player');

const App = React.createClass({
  render() {
    return(
      <div>
        <Navbar />
        {this.props.children}
        <Player />
      </div>
    )
  }
});


const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SoundscapeIndex} />
      <Route path="/soundscape/:ss_id" component={SoundscapeDetail} />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={LoginForm} />
      <Route path="/users/:userId" component={UserPage} />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", () => {
  if(window.currentUser) {
    SessionActions.receiveCurrentUser(currentUser);
  }
  ReactDOM.render(
    appRouter, document.getElementById('content')
  )
});
