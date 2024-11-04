import './App.css';
import logo from './assets/logo.png'; // Tell webpack this JS file uses this image
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/home'
import Menu from './pages/menu'
import Bookings from './pages/bookings'
import Success from './pages/success'

function App() {
  return (
    <div className="grid-container">
      <header className="grid-item">
        {/* <img src={logo} style={{height:"20%", width:"20%"}} className="grid-item" alt="Logo" /> */}
      </header>
      <nav className="grid-item">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/bookings">Bookings</Link></li>
        </ul>
      </nav>
      <main className="grid-item">
      <Routes>
        <Route path='/' element={<Home />} Redirect to="/home" />
        <Route path='/menu' element={<Menu />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/success' element={<Success />} />
      </Routes>
      </main>
      <footer className="grid-item">© Copyright Little Lemon</footer>
    </div>
  );
}

export default App;
