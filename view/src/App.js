import { Link } from 'react-router-dom';
import './App.css';
import logo from "./images/logo/Logo-Web.png";

function App() {
  return (
    <div className="App">
      <header className='header'>
        <Link to="/acceuil">
          <img src={logo} className="header__logo" alt="Logo Christopher Nafrere"/>
        </Link>
      </header>
    </div>
  );
}

export default App;
