import logo from './assets/logo.jpg';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/home'
import Menu from './pages/menu'
import Bookings from './pages/bookings'

function App() {
  return (
    <div className="grid-container">
      <header className="grid-item">
        <img src={logo} style={{height: '119px', width: '384px', borderRadius: '16px', justifySelf: 'center'}} alt="Logo" />
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
      </Routes>
      </main>
      <footer className="grid-item">© Copyright Little Lemon</footer>
    </div>
  );
}

export default App;
