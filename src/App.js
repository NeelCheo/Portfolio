import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header>
        <Navigation />
      </Header>

      <main>
        <About />
        <Portfolio />
        <Contact />
        <Resume />
      </main>

      <Footer />
    </div>
  );
}

export default App;
