import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header>
          <Navigation />
        </Header>

        <main>
          <Routes>
            <Route path="/" element={ <About /> } />
            <Route path="/portfolio" element={ <Portfolio /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/resume" element={ <Resume /> } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
