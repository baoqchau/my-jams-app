import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import albumData from './../data/albums';
import './Library.css';
import Nav from './Nav';

class Library extends Component {
  constructor(props){
    super(props);
    this.state = { albums: albumData };
    }
  render() {
    return(
      <div className="library">
        <Nav/>
        {
          this.state.albums.map( (album, index) =>
            <Link to={`/albums/${album.slug}`} key={index}>
              {album.title}
              <img src={album.albumCover} alt={album.title}/>
              <div>{album.title}</div>
              <div>{album.artist}</div>
              <div>{album.songs.length} songs </div>
            </Link>
          )
        }
      </div>
    );
  }
};

export default Library; 
