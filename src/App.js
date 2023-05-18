import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/">
              <About />
            </Route>

            <Route path="/portfolio">
              <Portfolio />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
