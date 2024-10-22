import './App.css';
import logo from './assets/logo.png'; // Tell webpack this JS file uses this image
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Contact from './pages/contact'

function App() {
  return (
    <div className="grid-container">
      <header className="grid-item">
        {/* <img src={logo} style={{height:"20%", width:"20%"}} className="grid-item" alt="Logo" /> */}
      </header>
      <nav className="grid-item">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <main className="grid-item">main</main>
      <footer className="grid-item">footer</footer>
    </div>
  );
}

export default App;
