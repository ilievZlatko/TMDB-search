import React from 'react';
import './DateDisplayer.scss';

import moment from 'moment';

/**
 * The DateDisplayer component.
 * The component accepts date in any standard for dates
 * it then reformat the date using moment.js
 * and renders it with the provided format, defaults to YYYY/MM/DD
 *
 * @param {String} inputDate - The input date (usually comming from the api).
 * @param {String} dateFormat - The format user likes the date to be displayed in.
 * @param {String} label - It will be displayed before the output date - ex: release date: 2018.11.19
 */

const DateDisplayer = props => {
  const defaultFormat = 'YYYY/MM/DD';
  const formatedDate = props.inputDate ? 
    moment(props.inputDate).format(props.dateFormat ? props.dateFormat : defaultFormat) : 
    'no date available';

  return (
    <span
      className="date">
      {props.label ? `${props.label} ${formatedDate}` : formatedDate}
    </span>
  );
}

export default DateDisplayer;
