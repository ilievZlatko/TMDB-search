import React from 'react';
import './DateDisplayer.scss';

import moment from 'moment';

const DateDisplayer = props => {
  const formatedDate = props.inputDate ? 
    moment(props.inputDate).format(props.dateFormat) : 
    'no date available';

  return (
    <span
      className="date">
      {props.label} {formatedDate}
    </span>
  );
}

export default DateDisplayer;
