import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Books from './components/Books';
import Videos from './components/Videos';
import SpinStory from './components/Spin-Story';
import BioContact from './components/Bio-Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Route component={Navbar}/>
        </header>
        <main id="main">
          <Route exact path="/" component={Landing} />
          <Route path="/books" component={Books} />
          <Route path="/videos" component={Videos} />
          <Route path="/spin-your-own-story" component={SpinStory} />
          <Route path="/bio-contact" component={BioContact} />
          <div id="flush"></div>
        </main>
        <footer id="footer">
          <Route component={Footer} />
        </footer>
      </div>
    );
  }
}

export default App;
