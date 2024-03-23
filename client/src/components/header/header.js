import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div className="header">
        <span className="header-label">MOVIECRITIC</span>
        <div className="header-button-container">
          <button className="header-add-button">Add new movie</button>
          <button className="header-review-button">Add new review</button>
        </div>
        </div>
    );
}

export default Header;