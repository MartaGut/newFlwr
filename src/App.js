import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/flowers">Flowers</Link>
          <Link to="/sightings">Sightings</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">New Account</Link>
        </nav>

      </header>
    </div>
  );
}

export default App;
