import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import FrontPage from './FrontPage';
import ProfilePage from './ProfilePage';
import NavBar from "./NavBar";

function NavBar() {
  return <nav className="nav">
      <a href="'/" className="page-title">Life List</a>
      <ul>
          <li>
              <a href="/login">Log In</a>
          </li>
          <li>
              <button href="/sign-up">Sign-Up</button>
          </li>
      </ul>
  </nav>
}

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/frontpage">
            <FrontPage />
          </Route>
          <Route exact path="/profile">
            <ProfilePage name="John Doe" bio="I'm a web developer" location="New York" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;