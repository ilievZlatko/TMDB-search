import React from 'react';

import NoImage from '../../assets/images/no-image.png';
import './Card.scss';

/**
 * The Card component.
 *
 * @param {String} cardImage - The path to the image, defaults to /assets/images/no-image.png.
 * @param {String} children - React dom nodes that will be rendered inside Card body.
 */

const Card = props => (
  <div className="card">
    <div className="card__left">
      <img
        src={props.cardImage}
        alt="poster"
        onError={(e) => { e.target.onerror = null; e.target.src = NoImage }}
      />
    </div>
    <div className="card__right">
      {props.children}
    </div>
  </div>
);

export default Card;
