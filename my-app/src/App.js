import './App.css';

function App() {
  return (
    <div className="grid-container">
      <header className="grid-item">
        <img src='my-app/src/assets' heigth='50px' width='auto' className="grid-item" alt="Logo" />
        <h1 className="grid-item">Homepage</h1>
      </header>
      <nav className="grid-item">
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </nav>
      <main className="grid-item"></main>
      <footer className="grid-item"></footer>
    </div>
  );
}

export default App;
