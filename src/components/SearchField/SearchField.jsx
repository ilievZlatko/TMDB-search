import React from 'react';
import './SearchField.scss';

const SearchField = props => (
  <input
    type="text"
    placeholder="Search movies here..."
    value={props.value}
    onChange={props.onSearch}
  />
);

export default SearchField;