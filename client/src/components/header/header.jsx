import React from 'react';
import './header.scss';

const Header = ({ setOpenModal }) => {

  return (
      <div className="header">
      <span className="header-label">MOVIECRITIC</span>
      <div className="header-button-container">
        <button className="header-add-button" onClick={() => setOpenModal(true)}>Add new movie</button>
        <button className="header-review-button">Add new review</button>
      </div>
      </div>
  );
}

export default Header;