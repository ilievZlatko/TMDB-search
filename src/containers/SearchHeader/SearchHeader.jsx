import React from 'react';
import './SearchHeader.scss';

const Header = props => (
  <header>
    <div className="container">
      {props.children}
    </div>
  </header>
);

export default Header;
