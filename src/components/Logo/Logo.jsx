import React from 'react';
import './Logo.scss';

const Logo = props => (
  <img src={props.image} alt={props.alt} />
);

export default Logo;
