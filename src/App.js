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
          <section className="main">
          <header>
            <h1 className="logo">My Jams App</h1>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/library'>Library</Link>
            </nav>
          </header>
            <Route exact path="/" component={Landing} />
            <Route path="/library" component={Library} />
            <Route path="/album" component={Album}/>
            <Route path="/albums/:slug" component={Album} />
          </section>
        </div>
    );
  }
}

export default App;
