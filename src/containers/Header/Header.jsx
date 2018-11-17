import React from 'react';

import Logo from '../../assets/images/logo.svg';

const Header = props => (
  <header>
    <ul>
      <li>
        <img src={Logo} alt="logo" />
      </li>
      <li>
        <input
          type="text"
          placeholder="Search movies"
          value={props.value}
          onChange={props.onSearch}
        />
      </li>
    </ul>
  </header>
);

export default Header;
