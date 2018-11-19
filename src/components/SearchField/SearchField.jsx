import React from 'react';
import './SearchField.scss';

/**
 * The SearchField component.
 * Basic input with type text
 *
 * @param {String} placeholder - It will be displayed initially and when there is no value
 * @param {String} value - Normally it should be filled automatically on type
 * @param {function} onSearch - Triggers on user input, accepts event param
 */

const SearchField = props => (
  <input
    type="text"
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onSearch}
  />
);

export default SearchField;