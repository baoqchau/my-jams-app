import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="secLanding">
          <Route exact path="/" component={Landing} />
        </section>
        <section className="secLibrary">
          <Route path="/library" component={Library} />
        </section>
        <section className="secAlbum">
          <Route path="/album" component={Album} />
        </section>
        <section className="secAlbumSlug">
          <Route path="/albums/:slug" component={Album} />
        </section>
      </div>
    );
  }
}

export default App;
