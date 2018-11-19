import React from 'react';
import './SearchHeader.scss';

/**
 * The Header component.
 * Styled wrapper component that only accepts react dom nodes.
 *
 * @param {String} children - react dom nodes.
 */

const Header = props => (
  <header>
    <div className="container">
      {props.children}
    </div>
  </header>
);

export default Header;
