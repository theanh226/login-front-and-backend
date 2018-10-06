import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Successs from "./components/response/Success";
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";
import jwt_decode from "jwt-decode";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRouter from "./common/PrivateRoute";
import CreateProfile from "./components/create-profile/CreateProfile";
import EditProfile from "./components/edit-profile/EditProfile";
import AddEducation from "./components/add-credentials/AddEducation";
import AddExperience from "./components/add-credentials/AddExperience";
import Editxperience from "./components/edit-experience/Editxperience";
import Profiles from './components/profiles/Profiles';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    //Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container pb-5 mb-5">
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/success" component={Successs} />
              

              <Switch>
                <PrivateRouter
                  exact
                  path="/profiles"
                  component={Profiles}
                />
              </Switch>
              

              <Switch>
                <PrivateRouter
                  exact
                  path="/edit-experience"
                  component={Editxperience}
                />
              </Switch>

              <Switch>
                <PrivateRouter
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
              </Switch>

              <Switch>
                <PrivateRouter
                  exact
                  path="/add-education"
                  component={AddEducation}
                />
              </Switch>

              <Switch>
                <PrivateRouter exact path="/dashboard" component={Dashboard} />
              </Switch>

              <Switch>
                <PrivateRouter
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>

              <Switch>
                <PrivateRouter
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
