import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Spirit from './components/Spirit.js'
import Consult from './components/Consult.js'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className='App-main'>
        <Routes>
          <Route path='/' element='' />
          <Route path='/spirit' element={<Spirit />} />
          <Route path='/consult' element={<Consult />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
