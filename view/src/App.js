import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import logo from "./images/logo/Logo-Web.png";
import Contact from './page/Contact';
import Home from './page/Home';
import MyGames from './page/MyGames';
import MyWebsite from './page/MyWebsites';
import WebsitePage from './page/WebsitePage';
import Who from './page/Who';

function App() {
  
  return (
    <main>
      <div className="App">
        <header className='header'>
          <Link to="/acceuil">
            <img src={logo} className="header__logo" alt="Logo Christopher Nafrere"/>
          </Link>


          <nav className='header__nav'>
            <Link to="/acceuil"><h1>Acceuil</h1></Link>
            <Link to="/site-web"><h1>Mes sites web</h1></Link>
            <Link to="/jeux-video"><h1>Mes jeux vidéo</h1></Link>
            <Link to="/qui-suis-je"><h1>Qui suis-je ?</h1></Link>
            <Link to="/contact"><h1>Me Contacter</h1></Link>
          </nav>
        </header>


        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/acceuil" element={<Home/>}/>
          <Route path="/site-web" element={<MyWebsite/>}/>
          <Route path="/jeux-video" element={<MyGames/>}/>
          <Route path="/qui-suis-je" element={<Who/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/site-web/:id" element={<WebsitePage/>}/>
        </Routes>
      </div>
    </main>
  );
}

export default App;
