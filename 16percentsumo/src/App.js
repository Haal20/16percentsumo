import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js'
import About from './components/About.js'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <nav className='App-nav'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className='App-main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
