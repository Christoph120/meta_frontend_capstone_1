import './App.css';
import logo from './assets/logo.png'; // Tell webpack this JS file uses this image

function App() {
  return (
    <div className="grid-container">
      <header className="grid-item">
        <img src={logo} heigth='50px' width='auto' className="grid-item" alt="Logo" />
      </header>
      <nav className="grid-item">
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </nav>
      <main className="grid-item">main</main>
      <footer className="grid-item">footer</footer>
    </div>
  );
}

export default App;
