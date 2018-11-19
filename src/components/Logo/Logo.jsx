import React from 'react';
import './Logo.scss';

/**
 * The Logo component.
 * Simply renders an image by given path
 *
 * @param {String} src - the path to the image
 * @param {String} alt - short description to describe the image
 */

const Logo = props => (
  <img src={props.image} alt={props.alt} />
);

export default Logo;
