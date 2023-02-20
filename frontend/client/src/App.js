import NavBar from "./scenes/Navbar";
import React from "react";
import HomePage from "./scenes/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element= {<HomePage />}/>
        <Route exact path="/HomePage" element= {<HomePage />}/>
      </Routes>
    </Router>
  );
}
export default App;
