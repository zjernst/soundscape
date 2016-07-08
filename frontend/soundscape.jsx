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
const FilterStore = window.FilterStore = require('./stores/filter_store');

const LoginForm = require('./components/sessions/login_form');
const UserPage = require('./components/users/user_page');
const SoundscapeIndex = require('./components/soundscapes/ss_index');
const Navbar = require('./components/navbar');
const SoundscapeDetail = require('./components/soundscapes/ss_detail');
const Player = require('./components/player');
const PlaylistSidebar = require('./components/playlist_sidebar');
const Frontpage = require('./components/frontpage');
const Footer = require('./components/footer');
const SplashPage = require('./components/splash_page');

const App = React.createClass({
  render() {
    return(
      <div>
        <Navbar />
        {this.props.children}
        <PlaylistSidebar />
        <Player />
        <Footer />
      </div>
    )
  }
});

function requireAuth(nextState, transition) {
  let isLoggedIn = SessionStore.isUserLoggedIn()
  if (!isLoggedIn) {
    transition({
      path: '/join',
      state: { nextPathname: nextState.location.pathname}
    })
  }
};

function authSuccess(nextState, transition) {
  let isLoggedIn = SessionStore.isUserLoggedIn()
  if (isLoggedIn) {
    transition({
      path: '/index',
      state: { nextPathname: nextState.location.pathname}
    })
  }
}


const appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={SplashPage} />
      <Route path="/index" component={Frontpage} onEnter={requireAuth}/>
      <Route path="/join" component={SplashPage} onEnter={authSuccess} />
      <Route path="/users/:userId" component={UserPage} onEnter={requireAuth} />
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
