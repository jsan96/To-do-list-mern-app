import NavBar from "./scenes/Navbar";
import RegisterPage from "./scenes/RegisterPage";
import HomePage from "./scenes/Homepage";
import TodoList from "./scenes/TodoList";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element= {<HomePage />}/>
        <Route exact path="/register" element= {<RegisterPage/>}/>
        <Route exact path="/todos" element= {<TodoList/>}/>
      </Routes>
    </Router>
  );
}
export default App;
