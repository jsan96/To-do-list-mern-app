import NavBar from "scenes/NavBar";
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from 'scenes/HomePage';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/HomePage">
            <HomePage />
          </Route>
      </div>
    </Router>
  );
}
export default App;