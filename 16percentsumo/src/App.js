import './App.css';
import { Routes, Route } from 'react-router-dom';
import Spirit from './components/Spirit.js'
import Consult from './components/Consult.js'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className='App-main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/spirit' element={<Spirit />} />
          <Route path='/consult' element={<Consult />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
