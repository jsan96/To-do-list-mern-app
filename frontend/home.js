const React = require('react');
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign-up</Link>
        </li>
      </ul>
    </nav>
  );
}

function Home() {
  <h1>Trouble staying organized?</h1>;
  <h2>We gotchu.</h2>
}

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;