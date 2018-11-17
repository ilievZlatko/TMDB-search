import React from 'react';

import Logo from '../../assets/images/logo.svg';
import './SearchHeader.scss';

const Header = props => (
  <header>
    <div className="container">
      <ul className="search-container">
        <li className="search-container__logo-holder">
          <img src={Logo} alt="logo" />
        </li>
        <li className="search-container__search-field-holder">
          <input
            type="text"
            placeholder="Search movies here..."
            value={props.value}
            onChange={props.onSearch}
          />
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
