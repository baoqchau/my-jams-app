import React from 'react';
import './Landing.css';
import Nav from './Nav';

const Landing = () => (
    <div className="landing">
      <Nav />
      <section className="selling-points">
        <div className="point">
          <h2 className="point-title">Choose Your Music</h2>
          <p className="point-description">he world is full of music; why should you have to listen to music that someone else chose?</p>
        </div>
        <div className="point">
          <h2 className="point-title">Unlimited, streaming, ad-free</h2>
          <p className="point-description">No arbitrary limits. No distractions.</p>
        </div>
        <div className="point">
          <h2 className="point-title">Mobile enabled</h2>
          <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
        </div>
      </section>
    </div>
);

export default Landing;
