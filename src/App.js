import React, { Component } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';

import { BASE_URL, API_KEY } from './constants';
import SearchHeader from './containers/SearchHeader/SearchHeader';

class App extends Component {
  state = {
    searchTerm: '',
    searchResults: []
  };

  debouncedSearch = debounce(this.fetchResults, 300);

  async fetchResults(query) {
    try {
      const data = await axios.get(`
        ${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}
      `,
      {
        headers: {
          'crossDomain': true,
          'Content-Type': 'application/json'
        }
      });
      this.setState({ searchResults: data.results });
    } catch(err) {
      console.log(err);
    }
  }

  onSearch = e => {
    this.setState({ searchTerm: e.target.value }, () => {
      if (this.state.searchTerm.trim().length > 0) {
        this.debouncedSearch(this.state.searchTerm);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <SearchHeader
          value={this.state.searchTerm}
          onSearch={this.onSearch}
        />
        <div className="container">
          Cards goes here.
        </div>
      </div>
    );
  }
}

export default App;
