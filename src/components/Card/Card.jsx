import React from 'react';

import './Card.scss';

const Card = props => (
  <div className="card">
    <div className="card__left">
      <img
        src={props.cardImage}
        alt="poster"
      />
    </div>
    <div className="card__right">
      {props.children}
    </div>
  </div>
);

export default Card;
