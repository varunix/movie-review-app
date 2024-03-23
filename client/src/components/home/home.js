import React from 'react';
import './home.scss';

const Home = () => {
  return (
    <div>
      <div className="move-critic-header">
        <span className="header-label">MOVIECRITIC</span>
        <div className="header-button-container">
          <button className="header-add-button">Add new movie</button>
          <button className="header-review-button">Add new review</button>
        </div>
      </div>
      <div>
        <title>The best movie reviews site!</title>
        {/* SearchBar And MovieList*/}
      </div>
    </div>
  );
};

export default Home;